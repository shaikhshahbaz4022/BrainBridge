from django.urls import path
from . import views
urlpatterns = [
    path("create/<int:courseID>", views.createAssi, name="createassign"),
    path("getassign", views.getUserAssi, name="getassign"),
    path("update/<int:assignID>", views.updateAssign, name="updateAssign"),
    path("delete/<int:assignID>", views.deleteAssign, name="deleteAssign"),
    path("getbyid/<int:assiID>", views.GetbyID, name="getbyid")

]
