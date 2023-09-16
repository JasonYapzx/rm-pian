from django.db import models

# Users
class User(models.Model):
    name = models.CharField(max_length=255)
    dob = models.DateField()
    date_created = models.DateField(auto_now_add=True)
    is_merchant = models.BooleanField(default=False)
    email = models.EmailField(unique=True)