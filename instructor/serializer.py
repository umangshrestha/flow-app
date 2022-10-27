from rest_framework import serializers

from faculty.serializers import DepartmentSerializer
from .models import Instructor

class InstructorSerializer(serializers.ModelSerializer):
    department = DepartmentSerializer()
    
    class Meta:
        model = Instructor
        fields = ("id", "email", "full_name", "department")
        depth = 1

    def to_representation(self, instance):
        rep =  super().to_representation(instance)
        rep = {**rep, **rep["department"]} 
        return rep