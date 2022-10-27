from rest_framework import serializers
from .models import Faculty, Department


class FacultySerializer(serializers.ModelSerializer):

    class Meta:
        model = Faculty
        fields = "__all__"


class DepartmentSerializer(serializers.ModelSerializer):
    faculty = FacultySerializer

    class Meta:
        model = Department
        fields = ("id", "department", "faculty")

    def to_representation(self, instance):
        rep = super().to_representation(instance)
        rep["faculty"] = instance.faculty.faculty
        return rep
