from django.shortcuts import render
from .models import ToDo
from rest_framework import viewsets
from .serializers import ToDoSerializer

# Create your views here.

class ToDoAPIView(viewsets.ModelViewSet):

    serializer_class = ToDoSerializer
    queryset = ToDo.objects.all()

