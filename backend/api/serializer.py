from asyncore import read
from .models import *
from rest_framework import fields, serializers

class FacultySerializer(serializers.ModelSerializer):

    class Meta:
        model  = Faculty
        fields = "__all__"


class QuerySerializer(serializers.ModelSerializer):
    uwinId =  FacultySerializer(read_only=True)

    class Meta:
        model  = Query
        fields = "__all__"
      
