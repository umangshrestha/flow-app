from rest_framework import routers
from django.urls import path, include
from .views import TagViewSet, TopicViewSet, LinkViewSet

router = routers.DefaultRouter()
router.register(r'tag', TagViewSet)
router.register(r'topic', TopicViewSet)
router.register(r'link', LinkViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
