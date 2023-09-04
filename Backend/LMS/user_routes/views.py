from django.shortcuts import render
from decouple import config
# Create your views here.
from django.http import HttpResponse, JsonResponse
from django.contrib.auth.hashers import make_password
from django.contrib.auth import authenticate, logout
import jwt
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
        secretKey = config("SecretKey")

        UserModel = User.objects.filter(email=email).exists()
        if not UserModel:
            return JsonResponse({"msg": "User Does not exists"})
        user = authenticate(email=email, password=password)

        if user is not None:
            payload = {
                'userid': user.id
            }
            token = jwt.encode(payload, secretKey, algorithm='HS256')
            userobj = {
                "id": user.id,
                "name": user.username,
                "email": user.email,
                "role": user.role
            }
            return JsonResponse({"msg": "login succesfull", "user": userobj, "token": token})
        else:
            return JsonResponse({"msg": "wrong Credentials"})

    else:
        return JsonResponse({"msg": "Wrong routes"})


def Logout(req):
    logout(req)
    return JsonResponse({"msg": "Logout Succesful"})


# def get(request):
#     if request.user.is_authenticated:
#         print(request.user)
#         return JsonResponse({"msg": "welcome"})
#     else:
#         return JsonResponse({"msg": "Login first"})

def allusers(req):
    if req.method == "GET":
        allusersget = User.objects.all()
        listing = {"data": list(allusersget.values())}
        return JsonResponse(listing)
    else:
        return JsonResponse({"msg": "Invalid Request"}, status=405)


def homeroute(req):
    return JsonResponse({"msg": "Welcome To Our Platform"})
