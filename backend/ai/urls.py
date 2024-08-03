
from django.urls import path
from . import views

urlpatterns = [
    path('assistant', views.assistant, name='assistant'),
    # path('content', views.ai, name='ai'),
]
