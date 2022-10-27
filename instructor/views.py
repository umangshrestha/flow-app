from .models import Instructor
from .serializer import InstructorSerializer, InstructorOutputSerializer
from rest_framework import viewsets


class InstructorViewSet(viewsets.ModelViewSet):
    queryset = Instructor.objects.all()

    def get_serializer_class(self):
        print("=====================>", self.action)
        if self.action == "list":
            return InstructorOutputSerializer

        return InstructorSerializer
        