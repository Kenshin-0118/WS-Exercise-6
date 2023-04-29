from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


from .serializers import BoardSerializer, Board
from .serializers import UserSerializer, User
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

@api_view(['GET'])
def user_login(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def user_register(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)

@api_view(['POST'])
def board_action(request):
    board = None
    if request.method == 'POST':
        board = Board.objects.create(
            title = request.data['Title'],
           description = request.data['Description']  
        )
        board.save()
        #serializer = Board.objects.create
    return Response(board.data)