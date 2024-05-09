import os
import json
from django.shortcuts import render
from django.http import JsonResponse
from django.core.mail import send_mail
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from openai import OpenAI, APIError, APIConnectionError, RateLimitError
import time

# Set your OpenAI API key
OPENAI_API_TOKEN = settings.OPENAI_API_TOKEN

# Initialize the OpenAI client
client = OpenAI(api_key=OPENAI_API_TOKEN)

def react_app_view(request):
    # List of valid React app URLs
    valid_urls = [
        '/',
        '/custom-web-development',
        '/budget-web-development',
        '/funnels',
        '/about-me',
        '/contact-success',
    ]
    
    sitemap_urls = [
        '/sitemap.xml',
        '/sitemap.xml/',
    ]
    
    robots_urls = [
        '/robots.txt',
        '/robots.txt/',
    ]

    # Get the requested URL path
    requested_path = request.path

    # Check if the requested path is in the list of valid URLs
    if requested_path in valid_urls:
        return render(request, 'react_template.html')
    elif requested_path in sitemap_urls:
        return render(request, 'sitemap.xml')
    elif requested_path in robots_urls:
        return render(request, 'robots.txt')
    elif requested_path.startswith('/send-email'):
        return send_email(request)
    elif requested_path.startswith('/openai'):
        return openai_api(request)
    else:
        # If the requested path is not valid, raise a 404 error
        return render(request, 'react_template.html', status=404)

def load_openai_assistant(assistant_id, vs_ID):
    """Load the OpenAI assistant and create a new thread for interaction."""
    assistant = client.beta.assistants.retrieve(assistant_id)
    thread = client.beta.threads.create(
        tool_resources={
            "file_search": {
                "vector_store_ids": [vs_ID]
            }
        }
    )
    return thread, assistant

def wait_on_run(run, thread):
    """Wait for the assistant run to complete or progress to next stage."""
    idx = 0
    while run.status == "queued" or run.status == "in_progress":
        print(f"Waiting for assistant response{'.'*idx}", end="\r")
        idx = (idx + 1) % 4
        run = client.beta.threads.runs.retrieve(
            thread_id=thread.id,
            run_id=run.id,
        )
        time.sleep(0.5)
    return run

def get_assistant_response(thread, assistant_id, userInput):
    """Interact with the assistant by sending user input and retrieving the response."""
    message = client.beta.threads.messages.create(
        thread_id=thread.id,
        role="user",
        content=userInput,
    )

    run = client.beta.threads.runs.create(
        thread_id=thread.id,
        assistant_id=assistant_id,
    )

    run = wait_on_run(run, thread)

    messages = client.beta.threads.messages.list(
        thread_id=thread.id, order="asc", after=message.id
    )
    try:
        return messages.data[0].content[0].text.value
    except IndexError:
        return "No response from the assistant, please try again."

@require_POST
@csrf_exempt
def openai_api(request):
    """Handle requests to interact with OpenAI assistant."""
    if request.method == 'POST':
        data = json.loads(request.body)
        userInput = data.get('userInput', '')

        ASSISTANT_ID = settings.ASSISANT_ID_TOKEN
        VS_ID = settings.VS_ID_TOKEN
        
        thread, assistant = load_openai_assistant(ASSISTANT_ID, VS_ID)
        response = get_assistant_response(thread, ASSISTANT_ID, userInput)
        
        return JsonResponse({'response': response})
    else:
        return JsonResponse({'error': 'Invalid request method'})

@require_POST
@csrf_exempt
def send_email(request):
    """Handle requests to send emails."""
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('name', '')
        from_email = data.get('fromEmail', '')
        message = data.get('message', '')

        send_mail(
            subject='Contact Form Submission',
            message=f'Name: {name}\nEmail: {from_email}\nMessage: {message}',
            from_email=from_email,
            recipient_list=[settings.DEFAULT_FROM_EMAIL],
            fail_silently=False,
        )
        
        send_mail(
            subject=f"Thank you for contacting me, {name}",
            message=f"Thank you for contacting me, {name}.\n"
                    f"I will get back to you as soon as possible.\n\n"
                    f"Best regards,\n"
                    f"Your Name",

            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[from_email],
            fail_silently=False,
        )
        
        return JsonResponse({'message': 'Email sent successfully'})
    else:
        return JsonResponse({'error': 'Invalid request method'})