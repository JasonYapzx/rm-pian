from django.urls import path
from .views import create_listing, read_listing, update_listing, delete_listing, listings_in_collection

urlpatterns = [
    path('create', create_listing, name='create_listing'),
    path('<int:listing_id>', read_listing, name='read_listing'),
    path('update/<int:listing_id>', update_listing, name='update_listing'),
    path('delete/<int:listing_id>', delete_listing, name='delete_listing'),
    path('get-collection/<int:collection_id>', listings_in_collection, name='listings_in_collection'),
]
