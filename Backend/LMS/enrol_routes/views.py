from course_route.models import Course
from .models import Enrollment
from django.shortcuts import render
from django.contrib.auth import get_user_model
from django.http import JsonResponse
User = get_user_model()


def createEnrol(req, courseID):
    if (req.method == "POST"):
        userid = req.userid
        user = User.objects.get(id=userid)
        if user.role == "student":

            course = Course.objects.get(id=courseID)
            alreadyEnrolled = Enrollment.objects.filter(
                student=user, course=courseID).exists()
            if alreadyEnrolled:
                return JsonResponse({"msg": "You Have Already Enrolled"})
            data = Enrollment.objects.create(
                student=user, course=course
            )
            return JsonResponse({"msg": "Enrollment Added Succesfully"}, status=201)
        else:
            return JsonResponse({"msg": "You Are Not Authorized"})
    else:
        return JsonResponse({"msg": "Invalid Request"}, status=405)


def getenroldata(req):
    if req.method == "GET":
        studentid = req.userid
        student = User.objects.get(id=studentid)

        enroldata = Enrollment.objects.filter(student=student)  # [{},{},{}]
        print(enroldata)
        data = []
        for item in enroldata:
            course = item.course
            instructor = course.instructor
            print(course, instructor)
            obj = {
                "id": item.id,
                "student_name": student.username,
                "instructor_name": instructor.username,
                "course_name": course.title,
                "course_desc": course.description,
                "enrollment_date": item.enrollment_date,
                "image_course": course.image
            }
            data.append(obj)
        return JsonResponse({"data": data})
    else:
        return JsonResponse({"msg": "Invalid Request"}, status=405)
