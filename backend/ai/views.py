import json
import time
from django.conf import settings
from django.core.mail import send_mail
from django.http import HttpResponse, JsonResponse, StreamingHttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from .openai_logic.openai_client import OpenAIClient
from .openai_logic.task_processor import MessageProcessor

@require_POST
@csrf_exempt
def assistant(request):
    """Handle requests to interact with OpenAI assistant."""
    OPENAI_API_TOKEN = settings.OPENAI_API_TOKEN
    ASSISTANT_ID = settings.ASSISTANT_ID_TOKEN
    VS_ID = settings.VS_ID_TOKEN
    if request.method == 'POST':
        client = OpenAIClient(api_key=OPENAI_API_TOKEN, assistant_id=ASSISTANT_ID, VS_ID=VS_ID)
        data = json.loads(request.body)
        userInput = data.get('userInput', '')

        if userInput == "clear":
            thread_id = request.session.get('thread_id', '')
            if thread_id:
                client.delete_thread(thread_id)
                request.session['thread_id'] = ''
                request.session['thread_start_time'] = ''
            return HttpResponse(status=204)  
        
        if userInput == "Open ChatBot":
            thread = client.create_thread()
            request.session['thread_id'] = thread.id
            request.session['thread_start_time'] = time.time()
            
            send_mail(
                'New ChatBot Session',
                'A new chatbot session has been started.',
                settings.EMAIL_HOST_USER,
                [settings.EMAIL_HOST_USER],
                fail_silently=False,
            )

        thread = client.get_thread(request.session.get('thread_id', ''))
        processor = MessageProcessor(client, thread)
        processor.process_message(userInput)
        stream = processor.get_assistant_response(userInput)

        response = StreamingHttpResponse(stream, status=200, content_type='text/event-stream')
        response['Cache-Control'] = 'no-cache'
        response['X-Accel-Buffering'] = 'no'
        return response

    return JsonResponse({'error': 'Method not allowed'}, status=405)
