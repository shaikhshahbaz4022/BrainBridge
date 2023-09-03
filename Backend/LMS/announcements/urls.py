from django.urls import path
from . import views
urlpatterns = [
    path("create/<int:courseID>", views.CreateAnnouncements, name="create"),
    path("get", views.GetAnnouncements, name="getann")

]
