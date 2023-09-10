from django.urls import path
from . import views

urlpatterns = [
    path('create-collection/', views.create_collection, name='create_collection'),
    path('collection/<int:collection_id>/', views.read_collection, name='read_collection'),
    path('collection/<int:collection_id>/update/', views.update_collection, name='update_collection'),
    path('collection/<int:collection_id>/delete/', views.delete_collection, name='delete_collection'),
]
