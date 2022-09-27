from asyncore import read
from .models import *
from rest_framework import fields, serializers


class TopicSerializer(serializers.ModelSerializer):

    class Meta:
        model  = Topic
        fields = "__all__"



class FacultySerializer(serializers.ModelSerializer):

    class Meta:
        model  = Faculty
        fields = "__all__"



class QuerySerializer(serializers.ModelSerializer):
   
    class Meta:
        model  = Query
        fields = "__all__"
        extra_kwargs = {
            "topics": {"write_only": True},
            "uwinId": {"write_only": True},
        }
      
