import json
from django.conf import settings
from django.shortcuts import render
from django.http import JsonResponse
from django.core.mail import send_mail
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST

from ai.views import assistant


def react_app_view(request):
    """Serve the React app."""
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

    requested_path = request.path

    if requested_path in valid_urls:
        return render(request, 'react_template.html')
    elif requested_path in sitemap_urls:
        return render(request, 'sitemap.xml')
    elif requested_path in robots_urls:
        return render(request, 'robots.txt')
    elif requested_path.startswith('/send-email'):
        return send_email(request)
    elif requested_path.startswith('/assistant'):
        return assistant(request)
    else:
        return render(request, 'react_template.html', status=404)


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
