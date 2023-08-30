import json
from django.http import JsonResponse
from .models import Course
from django.contrib.auth import get_user_model
from django.contrib.auth.decorators import login_required
User = get_user_model()


def CreateCourse(req):
    if req.method == "POST":
        try:
            body = json.loads(req.body)
            title = body.get("title")
            description = body.get("description")
            image = body.get("image")
            if not title or not description:
                return JsonResponse({"msg": "Title or Desc Missing"})
            user = req.user
            isCourseExists = Course.objects.filter(title=title).exists()
            if isCourseExists:
                return JsonResponse({"msg": "Course Already Exists"})
            if user.role == "instructor":
                data = Course.objects.create(
                    instructor=user, title=title, description=description, image=image
                )
                return JsonResponse({"msg": "Course Created Succesfully", "course_id": data.id}, status=201)
            else:
                return JsonResponse({"msg": "You Are Not Authorized"}, status=401)
        except json.JSONDecodeError:
            return JsonResponse({"msg": "Invalid Json format"}, status=401)
    else:
        return JsonResponse({"msg": "Invalid request"}, status=405)


def getallCourse(req):
    if (req.method == "GET"):
        course_data = []
        data = Course.objects.all().select_related("instructor")
        for item in data:
            instructors = {
                "id": item.instructor.id,
                "username": item.instructor.username
            }
            obj = {
                "id": item.id,
                'title': item.title,
                "description": item.description,
                "image": item.image,
                "instructor": instructors
            }
            course_data.append(obj)

        return JsonResponse({"data": course_data})
    else:
        return JsonResponse({"msg": "Invalid request"}, status=405)


def getCourseByID(req, courseID):
    if (req.method == "GET"):
        courcedata = Course.objects.get(id=courseID)

        obj = {
            "id": courcedata.id,
            "title": courcedata.title,
            "description": courcedata.description
        }
        return JsonResponse(obj)
    else:
        return JsonResponse({"msg": "Invalid Request"}, status=405)
