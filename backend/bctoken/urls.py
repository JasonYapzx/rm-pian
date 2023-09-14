from django.urls import path
from .views import create_token, read_token, update_token, delete_token, tokens_in_collection

urlpatterns = [
    path('create', create_token, name='create_token'),
    path('<int:token_id>', read_token, name='read_token'),
    path('update/<int:token_id>', update_token, name='update_token'),
    path('delete/<int:token_id>', delete_token, name='delete_token'),
    path('get-collection/<int:collection_id>', tokens_in_collection, name='tokens_in_collection'),
]