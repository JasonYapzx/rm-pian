from django.http import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Collection
from .serializers import CollectionSerializer
from users.models import User
from django.shortcuts import get_object_or_404

# Create a new collection
@api_view(['POST'])
def create_collection(request):
    if request.method == 'POST':
        merchant_id = request.data.get('merchant')  

        try:
            referenced_user = User.objects.get(pk=merchant_id)
        except User.DoesNotExist:
            return Response({'error': 'Referenced user does not exist'}, status=status.HTTP_400_BAD_REQUEST)

        # Check if the referenced user is a merchant
        if referenced_user.is_merchant:
            serializer = CollectionSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({'message': 'Collection created successfully'})
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'error': 'Referenced user is not a merchant'}, status=status.HTTP_403_FORBIDDEN)

# Read a collection by ID
@api_view(['GET'])
def read_collection(request, collection_id):
    collection = get_object_or_404(Collection, id=collection_id)
    serializer = CollectionSerializer(collection)
    return Response(serializer.data)

# Update a collection by ID
@api_view(['PUT'])
def update_collection(request, collection_id):
    collection = get_object_or_404(Collection, id=collection_id)
    serializer = CollectionSerializer(collection, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'Collection updated successfully'})
    return Response(serializer.errors, status=400)

# Delete a collection by ID
@api_view(['DELETE'])
def delete_collection(request, collection_id):
    collection = get_object_or_404(Collection, id=collection_id)
    collection_name = collection.name  # Get the collection's name before deleting
    collection.delete()
    return Response({'message': f'Collection {collection_name} deleted successfully'})
