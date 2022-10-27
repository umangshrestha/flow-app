"""flowapp URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.urls import path, include
from rest_framework import routers

from faculty.views import FacultyViewSet, DepartmentViewSet
from instructor.views import InstructorViewSet
from topic.views import TagViewSet, TopicViewSet, LinkViewSet

router = routers.DefaultRouter()
router.register(r'department', DepartmentViewSet)
router.register(r'faculty', FacultyViewSet)
router.register(r'tag', TagViewSet)
router.register(r'topic', TopicViewSet)
router.register(r'link', LinkViewSet)
router.register(r'instructor', InstructorViewSet)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')), 
    path('', include(router.urls)),
    
    path(r'api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]
