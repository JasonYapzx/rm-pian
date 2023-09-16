from django.db import models
from users.models import User  
from bctoken.models import Token  
from collection.models import Collection 

class Listing(models.Model):
    tokenId = models.ForeignKey(Token, on_delete=models.CASCADE)
    collectionId = models.ForeignKey(Collection, on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    title = models.CharField(max_length=255)
    seller = models.ForeignKey(User, on_delete=models.CASCADE)
    time_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
