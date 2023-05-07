
from django.urls import path
from . import views

urlpatterns = [
    # Other Django URL patterns here

    # Catch-all route for your React app
    path('', views.react_app_view, name='react_app'),
]
