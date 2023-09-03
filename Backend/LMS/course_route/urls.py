

from django.urls import path
from . import views
urlpatterns = [
    path("create", views.CreateCourse, name="createcourse"),
    path("get", views.getallCourse, name="getallcourse"),
    path("getdata/<int:courseID>", views.getCourseByID, name="getbyID"),
    path('delete/<int:courseID>', views.deleteCourse, name="deleteID"),
    path("getinst", views.getInstructorCourse, name="instructorGet"),
    path("getchat", views.getChatResponse, name="getchat")
]
