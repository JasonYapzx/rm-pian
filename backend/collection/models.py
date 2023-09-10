from django.db import models
from users.models import User  # Import the User model

class Collection(models.Model):
    merchant = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    cost = models.FloatField()
    currently_minted = models.PositiveIntegerField()
    total_available = models.PositiveIntegerField()
