import json
from django.http import JsonResponse
from .models import Course
from django.contrib.auth import get_user_model
from django.contrib.auth.decorators import login_required
User = get_user_model()


@login_required
def CreateCourse(req):
    if req.method == "POST":
        try:
            body = json.loads(req.body)
            title = body.get("title")
            description = body.get("description")

            if not title or not description:
                return JsonResponse({"msg": "Title or Desc Missing"})
            user = req.user
            if user.role == "instructor":
                data = Course.objects.create(
                    instructor=user, title=title, description=description
                )
                return JsonResponse({"msg": "Course Created Succesfully", "course_id": data.id}, status=201)
            else:
                return JsonResponse({"msg": "You Are Not Authorized"}, status=401)
        except json.JSONDecodeError:
            return JsonResponse({"msg": "Invalid Json format"}, status=401)
    else:
        return JsonResponse({"msg": "Invalid request"}, status=405)
