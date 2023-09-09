from django.urls import path
from . import views
urlpatterns = [
    path('register', views.Register, name="register"),
    path('login', views.Login, name="login"),
    path('logout', views.Logout, name='logout'),
    path('get', views.allusers, name='get'),
    path('home', views.homeroute, name="home")
]
