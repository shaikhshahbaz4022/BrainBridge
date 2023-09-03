import json
from enrol_routes.models import Enrollment
from django.shortcuts import render
from course_route.models import Course
from django.contrib.auth import get_user_model
from .models import Announcements
from django.http import JsonResponse
User = get_user_model()


def CreateAnnouncements(req, courseID):
    if req.method == "POST":
        course = Course.objects.get(id=courseID)
        body = json.loads(req.body)
        title = body.get("title")
        content = body.get("content")
        created = Announcements.objects.create(
            course=course, title=title, content=content)
        return JsonResponse({"msg": "Announcement Created Succesfully"})
    else:
        return JsonResponse({"msg": "Invalid Request"}, status=405)


def GetAnnouncements(req):
    if req.method == "GET":
        userid = req.userid
        user = User.objects.get(id=userid)
        allenroll = Enrollment.objects.filter(student=user)
        arr = []
        for enrol in allenroll:
            course = enrol.course

            announcement = Announcements.objects.filter(course=course)
            for ann in announcement:

                obj = {
                    "announcement_id": ann.id,
                    "title": ann.title,
                    "content": ann.content,
                    "instructor_name": course.instructor.username,
                    "course_name": course.title,
                    "announcement_date": ann.announcement_date
                }
                arr.append(obj)
        return JsonResponse({"data": obj})
    else:
        return JsonResponse({"msg": "Invalid request"}, status=405)
