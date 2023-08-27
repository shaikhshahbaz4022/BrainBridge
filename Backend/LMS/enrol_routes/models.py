from django.db import models
from course_route.models import Course
from django.contrib.auth import get_user_model
User = get_user_model()


class Enrollment(models.Model):
    student = models.ForeignKey(User, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    enrollment_date = models.DateTimeField(auto_now_add=True)
