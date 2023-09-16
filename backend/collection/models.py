from django.db import models
from users.models import User 
from bctoken.models import Token

class Collection(models.Model):
    merchant = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    cost = models.FloatField()
    currently_minted = models.PositiveIntegerField()
    total_available = models.PositiveIntegerField()

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

        for _ in range(self.total_available):
            Token.objects.create(collection=self, currentHolder=None)
