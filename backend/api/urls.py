from rest_framework.routers import DefaultRouter
from .views import *
from django.urls import path, include

# Create your views here.
router = DefaultRouter()
router.register(r'faculty', FacultyViewSet)
router.register(r'query', QueryViewSet)


urlpatterns = [
    # path(r'trash/', DeletedItemList.as_view()),
    # path(r'warehouse/', WarehouseList.as_view()),
    path(r'faculty/<int:pk>', FacultyDetail.as_view()),
    path(r'users/<int:pk>', FacultyDetail.as_view()),
    # path(r'trash/<int:id>', ItemDetail.as_view()),
    path(r'', include(router.urls), name="add items or warehouse"),
]