
from django.urls import path, re_path
from . import views

urlpatterns = [
    # Other Django URL patterns here

    # Catch-all route for your React app
    re_path(r'^.*$', views.react_app_view, name='react_app'),
    path('send-email/', views.send_email, name='send_email'),
]
