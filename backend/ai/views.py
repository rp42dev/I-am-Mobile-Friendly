import json
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from django.http.response import StreamingHttpResponse
from openai import OpenAI

import time

from .openai_logic.openai_client import OpenAIAssistant

# Set your OpenAI API key
OPENAI_API_TOKEN = settings.OPENAI_API_TOKEN


# Initialize the OpenAI client
client = OpenAI(api_key=OPENAI_API_TOKEN)

    
@require_POST
@csrf_exempt
def assistant(request):
    """
    Handle requests to interact with OpenAI assistant.
    """
    if request.method == 'POST':
        openai_assistant = OpenAIAssistant(client)
        data = json.loads(request.body)
        userInput = data.get('userInput', '')
        print(f'User input: {userInput}')

        if userInput == "clear":
            thread_id = request.session.get('thread_id', '')
            if thread_id:
                openai_assistant.delete_thread(thread_id)
                request.session['thread_id'] = ''
                request.session['thread_start_time'] = ''
            return HttpResponse(status=204)  

        ASSISTANT_ID = settings.ASSISTANT_ID_TOKEN
        VS_ID = settings.VS_ID_TOKEN
        openai_assistant.load_openai_assistant(ASSISTANT_ID)
        
        if userInput == "Open ChatBot":
            thread = openai_assistant.create_openai_thread(VS_ID)
            # set thread_id and thread_start_time in session
            request.session['thread_id'] = thread.id
            request.session['thread_start_time'] = time.time()
            
            send_mail(
                'New ChatBot Session',
                'A new chatbot session has been started.',
                settings.EMAIL_HOST_USER,
                [settings.EMAIL_HOST_USER],
                fail_silently=False,
            )

        thread = openai_assistant.get_openai_thread(request.session.get('thread_id', ''))
        stream = openai_assistant.get_assistant_response(thread, ASSISTANT_ID, userInput)
        response = StreamingHttpResponse(stream, status=200, content_type='text/event-stream')
        response['Cache-Control'] = 'no-cache'
        response['X-Accel-Buffering'] = 'no'
        return response

    # Return a 405 Method Not Allowed response for non-POST requests
    return JsonResponse({'error': 'Method not allowed'}, status=405)