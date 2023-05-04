from rest_framework import serializers
from .models import Project


class MySerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'


class EmailSerializer(serializers.Serializer):
    name = serializers.CharField()
    message = serializers.CharField()
    fromEmail = serializers.EmailField()
