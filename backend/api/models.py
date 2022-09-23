from django.db import models

# Create your models here.
class Topic(models.Model):  
    id = models.AutoField(primary_key=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    topic = models.CharField(max_length=100, unique=True)
    
    def __str__(self):
        return self.topic

class Faculty(models.Model):  
    uwin_id = models.CharField(primary_key=True, max_length=10, unique=True)
    first_name = models.CharField(max_length=15)
    last_name = models.CharField(max_length=35)
    department = models.CharField(max_length=100)
    faculty = models.CharField(max_length=30)
    email = models.CharField(max_length=50)

    def __str__(self):
        return self.uwin_id

class Query(models.Model):  
    id = models.AutoField(primary_key=True)
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.CharField(max_length=100)
    updated_at = models.DateTimeField(auto_now=True)
    topics = models.ManyToManyField(Topic)
    Faculty = models.ForeignKey(Faculty, on_delete=models.CASCADE)
    desciption = models.CharField(max_length=250)
    isTeams = models.BooleanField(default=False)
    isMultiple = models.BooleanField(default=False)

    def __str__(self):
        return self.desciption

