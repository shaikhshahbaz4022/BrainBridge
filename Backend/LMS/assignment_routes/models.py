from course_route.models import Course
from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()


class Assignment(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField()
    start_date = models.DateTimeField(auto_now_add=True)
    due_date = models.DateTimeField()
    is_active = models.BooleanField(default=True)
    last_modified = models.DateTimeField(auto_now=True)
