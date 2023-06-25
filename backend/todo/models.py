from django.db import models

# Create your models here.

class ToDo(models.Model):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=150)
    isDone = models.BooleanField(default=False)
