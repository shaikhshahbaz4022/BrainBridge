import json
from course_route.models import Course
from django.shortcuts import render
from django.contrib.auth import get_user_model
from enrol_routes.models import Enrollment
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from .models import Assignment
User = get_user_model()


# @login_required
def createAssi(req, courseID):
    if (req.method == "POST"):
        userid = req.userid
        user = User.objects.get(id=userid)
        if (user.role == "student"):
            return JsonResponse({"msg": "UnAuthorized Person"}, status=404)
        body = json.loads(req.body)
        title = body.get("title")
        description = body.get("description")
        due_date = body.get("due_date")
        course = Course.objects.get(id=courseID)
        assign = Assignment.objects.create(
            course=course, title=title, description=description, due_date=due_date
        )
        return JsonResponse({"msg": "Assignment created Succesfully"}, status=201)

    else:
        return JsonResponse({"msg": "Invalid Request"}, status=405)


# @login_required
def getUserAssi(req):
    if (req.method == "GET"):
        userid = req.userid
        user = User.objects.get(id=userid)
        if (user.role == "instructor"):
            return JsonResponse({"msg": "You Are not Authorized"})
        enrollments = Enrollment.objects.filter(student=user)
        data = []
        for enroll in enrollments:
            course = enroll.course
            assignments = Assignment.objects.filter(course=course)
            for assi in assignments:
                obj = {
                    "id": assi.id,
                    "title": assi.title,
                    "description": assi.description,
                    "due_date": assi.due_date,
                    "course_name": course.title,
                    "instructor_name": course.instructor.username,

                }
                data.append(obj)
        return JsonResponse({"data": data})
    else:
        return JsonResponse({"msg": "Invalid request"}, status=405)


def updateAssign(req, assignID):
    if (req.method == "PATCH"):
        userid = req.userid
        user = User.objects.get(id=userid)
        if (user.role == "student"):
            return JsonResponse({"msg": "You Are Not Authorized"})
        body = json.loads(req.body)
        title = body.get("title")
        description = body.get("description")
        is_active = body.get("is_active")
        assign = Assignment.objects.get(id=assignID)

        if title is not None:
            assign.title = title
        if description is not None:
            assign.description = description
        if is_active is not None:
            assign.is_active = is_active

        assign.save()

        return JsonResponse({"msg": "Assignment Updated Succesfully"}, status=201)
    return JsonResponse({"msg": "Invalid Request"}, status=405)


def deleteAssign(req, assignID):
    if req.method == "DELETE":
        userid = req.userid
        user = User.objects.get(id=userid)
        if user.role == "student":
            return JsonResponse({"msg": "You Are not Authorized"})
        try:
            assignment = Assignment.objects.get(id=assignID)
        except Assignment.DoesNotExist:
            return JsonResponse({"msg": "Assignment Not Found"})

        assignment.delete()

        return JsonResponse({"msg": "Assignment Deleted Succesfully"})
    else:
        return JsonResponse({"msg": "Invalid Request"}, status=405)
