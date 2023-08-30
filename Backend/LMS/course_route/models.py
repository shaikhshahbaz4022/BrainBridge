from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()


class Course(models.Model):
    instructor = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    image = models.TextField(blank=True)
    description = models.TextField()
