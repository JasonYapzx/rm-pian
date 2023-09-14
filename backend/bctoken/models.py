from django.db import models
from users.models import User  

class Token(models.Model):
    id = models.AutoField(primary_key=True)  # Automatically incrementing primary key
    collection = models.ForeignKey('collection.Collection', on_delete=models.CASCADE)
    currentHolder = models.ForeignKey(User, null=True, blank=True, on_delete=models.SET_NULL)
    lastUpdated = models.DateTimeField(auto_now=True)  

    def __str__(self):
        return f"Token {self.id} in Collection {self.collection_id}"
