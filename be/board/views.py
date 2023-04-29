from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .serializers import BoardSerializer, Board
# Create your views here.
#API

@api_view(['GET'])
def board_details(request, **kwargs):
    board = None
    if 'pk' in kwargs:
        board = BoardSerializer(Board.objects.get(pk = kwargs['pk']), many = True).data
    else:
        board = BoardSerializer(Board.objects.all(), many = True).data

    return Response(board)

@api_view(['POST'])
def board_action(request):
    board = None
    if request.method == 'POST':
        board = Board.objects.create(
            title = request.data['Title'],
           description = request.data['Description']
        
        )

        #serializer = Board.objects.create

    return Response("Created Successfully")