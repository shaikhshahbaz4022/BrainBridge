from django.db import models
from course_route.models import Course


class Announcements(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    title = models.TextField()
    content = models.TextField()
    announcement_date = models.DateTimeField(auto_now_add=True)
