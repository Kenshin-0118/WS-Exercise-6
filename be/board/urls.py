
from django.urls import path
from .views import board_details
from .views import board_action

urlpatterns = [
    path('details/', board_details),
    path('action/', board_action),
]
