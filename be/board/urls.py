
from django.urls import path
from .views import board_details
from .views import board_action
from .views import user_login
from .views import user_register

urlpatterns = [
    path('details/', board_details),
    path('action/', board_action),
    path('login/', user_login),
    path('register/', user_register)
]
