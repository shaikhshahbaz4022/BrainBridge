from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse, JsonResponse
from django.contrib.auth.hashers import make_password
from django.contrib.auth import authenticate, login, logout

import json
from django.contrib.auth import get_user_model
User = get_user_model()
# Create your views here.


def Register(request):
    if request.method == "POST":
        body = json.loads(request.body)
        username = body.get("username")
        email = body.get("email")
        password = body.get("password")
        role = body.get("role", "student")

        is_user_present = User.objects.filter(email=email).exists()
        if is_user_present:
            return JsonResponse({"msg": "User already present"})
        else:
            hashed_pass = make_password(password)
            user = User.objects.create(
                username=username, role=role, email=email, password=hashed_pass)
            return JsonResponse({"msg": "Registration Successful"})
    else:
        return JsonResponse({"msg": "Some error occurred"})


def Login(request):
    if request.method == "POST":
        body = json.loads(request.body)
        email = body.get("email")
        password = body.get("password")
        try:
            UserModel = User.objects.get(email=email)
            user = authenticate(email=email, password=password)
            if user is not None:
                login(request, user)
                return JsonResponse({"msg": "login succesfull"})
        except User.DoesNotExist:
            return JsonResponse({"msg": "User Does Not exist"})
    else:
        return JsonResponse({"msg": "Wrong routes"})


def Logout(req):
    logout(req)
    return JsonResponse({"msg": "Logout Succesful"})


def get(request):
    if request.user.is_authenticated:
        print(request.user)
        return JsonResponse({"msg": "welcome"})
    else:
        return JsonResponse({"msg": "Login first"})