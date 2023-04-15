from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings
from django.views import View
from django.http import JsonResponse
from rest_framework import viewsets
from .serializers import MySerializer, EmailSerializer
from .models import Project


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
        email = serializer.validated_data['fromEmail']
        message = serializer.validated_data['message']
        send_mail(
            subject,
            message + ' ' + email,
            email,
            recipient_list=[self.email],
        )
        return JsonResponse({'message': 'Email sent successfully'})
    
    
    