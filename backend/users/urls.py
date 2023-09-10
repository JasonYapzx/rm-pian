from django.urls import path
from . import views

urlpatterns = [
    path('create-user/', views.create_user, name='create_user'),
    path('read-user/<int:user_id>/', views.read_user, name='read_user'),
    path('update-user/<int:user_id>/', views.update_user, name='update_user'),
    path('delete-user/<int:user_id>/', views.delete_user, name='delete_user'),
]
