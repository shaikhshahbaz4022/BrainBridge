import jwt
from decouple import config
from django.http import JsonResponse
secretKey = config("SecretKey")


class AuthMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        excluded_urls = ['user/login', 'user/register', 'user/home']

        if any(request.path_info.endswith(url) for url in excluded_urls):
            return self.get_response(request)

        auth_header = request.META.get('HTTP_AUTHORIZATION', '')

        if not auth_header.startwith('Bearer '):
            return JsonResponse({"msg": "Login First"}, status=401)

        token = auth_header.split(' ')[1]

        try:
            decoded = jwt.decode(token, secretKey, algorithms=['HS256'])
            request.userid = decoded['userid']
            return self.get_response(request)
        except jwt.ExpiredSignatureError:
            return JsonResponse({"msg": "Token expired"}, status=401)
        except jwt.DecodeError:
            return JsonResponse({"Invalid Token"}, status=401)
        except KeyError:
            return JsonResponse({"msg": "Invalid Token format"}, status=401)
