import json
from django.shortcuts import render
from django.http import JsonResponse
from assignment_routes.models import Assignment
from .models import Submission
from django.contrib.auth import get_user_model
User = get_user_model()


def submitbyStudent(req, assignID):
    if (req.method == "POST"):
        userid = req.userid
        user = User.objects.get(id=userid)
        body = json.loads(req.body)
        submission_link = body.get("submission_link")
        if (user.role == "instructor"):
            return JsonResponse({"msg": "Unauthorized"})
        assignment = Assignment.objects.get(id=assignID)
        checkIsSubmissionPresent = Submission.objects.filter(
            student=user, assignment=assignment)
        if checkIsSubmissionPresent:
            return JsonResponse({"msg": "Assignment Already Present"})
        submited = Submission.objects.create(
            student=user, assignment=assignment, submission_link=submission_link)
        return JsonResponse({"msg": "Assignment Submitted Succesfully"}, status=201)
    else:
        return JsonResponse({"msg": "Invalid Request"}, status=405)

    # check that if student submitted the assignment , if yes make boolean value (true or false)
    # student cannot submit the assignment after the due date is gone


def getsubmissions(req, assignID):
    if (req.method == "GET"):
        userid = req.userid
        user = User.objects.get(id=userid)
        if (user.role == "student"):
            return JsonResponse({"msg": "UnAuthorized"})
        assignment = Assignment.objects.get(id=assignID)
        submission = Submission.objects.filter(assignment=assignment)
        data = []
        for item in submission:
            obj = {
                "id": item.id,
                "student_name": item.student.username,
                "instructor_name": assignment.course.instructor.username,
                "course_name": assignment.course.title,
                "submission_link": item.submission_link,
                "submission_date": item.submission_date,

            }
            data.append(obj)
        return JsonResponse({"data": data}, status=200)
    else:
        return JsonResponse({"msg": "Invalid Request"}, status=405)
