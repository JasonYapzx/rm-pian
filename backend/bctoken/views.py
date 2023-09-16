from django.http import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Token
from .serializers import TokenSerializer
from collection.models import Collection
from users.models import User
from django.shortcuts import get_object_or_404

# Create a new token
@api_view(['POST'])
def create_token(request):
    if request.method == 'POST':
        collection_id = request.data.get('collection')
        current_holder_id = request.data.get('currentHolder')

        try:
            referenced_collection = Collection.objects.get(pk=collection_id)
        except Collection.DoesNotExist:
            return Response({'error': 'Referenced collection does not exist'}, status=status.HTTP_400_BAD_REQUEST)

        referenced_user = None
        if current_holder_id:
            try:
                referenced_user = User.objects.get(pk=current_holder_id)
            except User.DoesNotExist:
                return Response({'error': 'Referenced user does not exist'}, status=status.HTTP_400_BAD_REQUEST)

        serializer = TokenSerializer(data=request.data)
        if serializer.is_valid():
            # Set the current holder if provided
            if referenced_user:
                serializer.validated_data['currentHolder'] = referenced_user
            serializer.save()
            return Response({'message': 'Token created successfully'})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
# Read a token by ID
@api_view(['GET'])
def read_token(request, token_id):
    token = get_object_or_404(Token, id=token_id)
    serializer = TokenSerializer(token)
    return Response(serializer.data)

# Update a token by ID
@api_view(['PUT'])
def update_token(request, token_id):
    token = get_object_or_404(Token, id=token_id)
    serializer = TokenSerializer(token, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'Token updated successfully'})
    return Response(serializer.errors, status=400)

# Delete a token by ID
@api_view(['DELETE'])
def delete_token(request, token_id):
    token = get_object_or_404(Token, id=token_id)
    token_id = token.id  # Get the token's ID before deleting
    token.delete()
    return Response({'message': f'Token {token_id} deleted successfully'})


# Get all tokens from a specific collection by collection ID
@api_view(['GET'])
def tokens_in_collection(request, collection_id):
    collection = get_object_or_404(Collection, id=collection_id)
    tokens = Token.objects.filter(collection=collection)
    serializer = TokenSerializer(tokens, many=True)
    return Response(serializer.data)