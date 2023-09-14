from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Listing
from .serializers import ListingSerializer
from collection.models import Collection
from django.shortcuts import get_object_or_404

# Create a new listing
@api_view(['POST'])
def create_listing(request):
    if request.method == 'POST':
        serializer = ListingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Listing created successfully'})
        return Response(serializer.errors, status=400)

# Read a listing by ID
@api_view(['GET'])
def read_listing(request, listing_id):
    listing = get_object_or_404(Listing, id=listing_id)
    serializer = ListingSerializer(listing)
    return Response(serializer.data)

# Update a listing by ID
@api_view(['PUT'])
def update_listing(request, listing_id):
    listing = get_object_or_404(Listing, id=listing_id)
    serializer = ListingSerializer(listing, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'Listing updated successfully'})
    return Response(serializer.errors, status=400)

# Delete a listing by ID
@api_view(['DELETE'])
def delete_listing(request, listing_id):
    listing = get_object_or_404(Listing, id=listing_id)
    listing_title = listing.title  # Get the listing's title before deleting
    listing.delete()
    return Response({'message': f'Listing "{listing_title}" deleted successfully'})

# Get all listings of a specific collection by collection ID
@api_view(['GET'])
def listings_in_collection(request, collection_id):
    listings = Listing.objects.filter(collectionId=collection_id)
    serializer = ListingSerializer(listings, many=True)
    return Response(serializer.data)
