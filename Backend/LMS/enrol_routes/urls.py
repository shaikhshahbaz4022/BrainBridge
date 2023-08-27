
from django.urls import path
from . import views
urlpatterns = [
    path("create/<int:courseID>", views.createEnrol, name="createEnroll"),
    path("get", views.getenroldata, name="getenroll")
]
