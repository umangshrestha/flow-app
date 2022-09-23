from .models import *
from rest_framework import fields, serializers


class QuerySerializer(serializers.ModelSerializer):
    class Meta:
        model  = Query
        fields = "__all__"

class FacultySerializer(serializers.ModelSerializer):
    class Meta:
        model  = Faculty
        fields = "__all__"


class TopicSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Topic
        fields = ("id", "topic")