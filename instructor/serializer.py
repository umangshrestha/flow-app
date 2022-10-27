from rest_framework import serializers

from faculty.serializers import DepartmentSerializer
from .models import Instructor


class InstructorSerializer(serializers.ModelSerializer):
    department = DepartmentSerializer

    class Meta:
        model = Instructor
        fields = "__all__"


class InstructorOutputSerializer(serializers.ModelSerializer):
    department = DepartmentSerializer

    class Meta:
        model = Instructor
        fields = "__all__"
        depth = 1

    def to_representation(self, instance):
        rep = super().to_representation(instance)
        print(rep["department"])
        return rep
