from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_protect
from django.http import JsonResponse
from rest_framework import viewsets
from .serializers import MySerializer, EmailSerializer
from .models import Project


def react_app_view(request):
    return render(request, 'react_template.html')


class ProjectsViewSet(viewsets.ModelViewSet):
    serializer_class = MySerializer
    queryset = Project.objects.all()


@method_decorator(csrf_protect, name='dispatch')
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

