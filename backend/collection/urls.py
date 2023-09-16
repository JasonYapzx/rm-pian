from django.urls import path
from . import views

urlpatterns = [
    path('create-collection/', views.create_collection, name='create_collection'),
    path('<int:collection_id>/', views.read_collection, name='read_collection'),
    path('update-collection/<int:collection_id>/', views.update_collection, name='update_collection'),
    path('delete-collection/<int:collection_id>/', views.delete_collection, name='delete_collection'),
]
