from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST

import json


def react_app_view(request):
    # List of valid React app URLs
    valid_urls = [
        '/',
        '/custom-web-development',
        '/budget-web-development',
        '/mobile-website-transformation',
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
    else:
        # If the requested path is not valid, raise a 404 error
        return render(request, 'react_template.html', status=404)


@require_POST
def send_email(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data['name']
        from_email = data['fromEmail']
        message = data['message']

        send_mail(
            subject='I am mobile friendly Contact Form Submission',
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
                    f"Raivis from I am mobile friendly",

            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[from_email],
            fail_silently=False,
        )
        return JsonResponse({'message': 'Email sent successfully'})
    else:
        return render(request, 'react_template.html')
