from django.db import models

class Faculty(models.Model):  
    uwinId = models.CharField(primary_key=True, max_length=10, unique=True)
    firstName = models.CharField(max_length=35)
    lastName = models.CharField(max_length=35)
    department = models.CharField(max_length=100)
    faculty = models.CharField(max_length=50)
    email = models.CharField(max_length=100)

    def __str__(self):
        return self.uwinId

class Query(models.Model):  
    id = models.AutoField(primary_key=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    createdBy = models.CharField(max_length=100)
    updatedAt = models.DateTimeField(auto_now=True)
    topics =  models.JSONField(default=list, null=False)
    location = models.CharField(max_length=100)
    uwinId = models.ForeignKey(Faculty, on_delete=models.CASCADE)
    description = models.CharField(max_length=250)
    isTeams = models.BooleanField(default=False)    
    isMultiple = models.BooleanField(default=False)

    def __str__(self):
        return self.description

