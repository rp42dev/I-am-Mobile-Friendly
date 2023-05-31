from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings
from django.http import JsonResponse
from rest_framework import viewsets
from .serializers import MySerializer, EmailSerializer
from .models import Project
from django.http import Http404


def react_app_view(request):
    # List of valid React app URLs
    valid_urls = [
        '/',
        '/custom-web-development',
        '/budget-web-development',
        '/mobile-website-transformation',
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
    else:
        # If the requested path is not valid, raise a 404 error
        return render(request, 'react_template.html', status=404)


class ProjectsViewSet(viewsets.ModelViewSet):
    serializer_class = MySerializer
    queryset = Project.objects.all()

class SendEmailViewSet(viewsets.ViewSet):

    serializer_class = EmailSerializer
    email = settings.DEFAULT_FROM_EMAIL

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        name = serializer.validated_data['name']
        from_email = serializer.validated_data['fromEmail']
        message = serializer.validated_data['message']

        send_mail(
            subject='I am mobile friendly Contact Form Submission',
            message=f'Name: {name}\nEmail: {from_email}\nMessage: {message}',
            from_email=self.email,
            recipient_list=[self.email],
        )
        send_mail(
            subject=f"Thank you for contacting me, {name}",
            message=f"Thank you for contacting me, {name}."
                    f"I will get back to you as soon as possible.\n\n"
                    f"Best regards,\n"
                    f"Raivis from I am mobile friendly",

            from_email=self.email,
            recipient_list=[from_email],
        )
        return JsonResponse({'message': 'Email sent successfully'})

