from rest_framework import routers
from django.urls import path, include
from .views import FacultyViewSet

router = routers.DefaultRouter()
router.register(r'faculty', FacultyViewSet)

urlpatterns = [
    path('', include(router.urls)),
]