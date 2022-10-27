from .models import Instructor
from .serializer import InstructorSerializer
from rest_framework import viewsets


class InstructorViewSet(viewsets.ModelViewSet):
    queryset = Instructor.objects.all()
    serializer_class = InstructorSerializer
