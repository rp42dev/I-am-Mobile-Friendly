from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings
from django.views import View
from django.http import JsonResponse
from rest_framework import viewsets
from .serializers import MySerializer, EmailSerializer
from .models import Project

def index(request):
    pass
    return render(request, 'index.html')

class ProjectsViewSet(viewsets.ModelViewSet):
    serializer_class = MySerializer
    queryset = Project.objects.all()
    

class SendEmailViewSet(viewsets.ViewSet):
    serializer_class = EmailSerializer
    email = settings.EMAIL_HOST_USER

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        subject = serializer.validated_data['subject']
        from_email = serializer.validated_data['fromEmail']
        message = serializer.validated_data['message']
        send_mail(
            subject,
            message + ' ' + from_email,
            from_email,
            recipient_list=[self.email],
        )
        send_mail(
            subject=f"Thank you for contacting me, {from_email}",
            message=f"Thank you for contacting me, {from_email}. I will get back to you as soon as possible.",
            from_email=self.email,
            recipient_list=[from_email],
        )
        return JsonResponse({'message': 'Email sent successfully'})
    
    
    