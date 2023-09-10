import json
from django.shortcuts import get_object_or_404, render
from django.http import JsonResponse

from .serializers import UserSerializer
from .models import User

'''
User controllers
'''
# Create user
def create_user(request):
    if request.method == 'POST':
        try:
            # Get the JSON data from the request body
            json_data = json.loads(request.body)

            # Extract values from the JSON data
            name = json_data.get('user', {}).get('name')
            dob = json_data.get('user', {}).get('dob')
            is_merchant = json_data.get('user', {}).get('is_merchant')
            email = json_data.get('user', {}).get('email')

            # Create and save the user
            user = User(name=name, dob=dob, is_merchant=is_merchant, email=email)
            user.save()

            return JsonResponse({'message': f'{user.name} created successfully'})
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON data'}, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)

# Read a user by ID
def read_user(request, user_id):
    user = get_object_or_404(User, id=user_id)
    data = {
        'id': user.id,
        'name': user.name,
        'dob': user.dob.strftime('%Y-%m-%d'),
        'date_created': user.date_created.strftime('%Y-%m-%d'),
        'is_merchant': user.is_merchant,
        'email': user.email
    }
    return JsonResponse(data)

# Update a user by ID
def update_user(request, user_id):
    if request.method == 'PUT':
        try:
            json_data = json.loads(request.body.decode('utf-8'))
            
            user = get_object_or_404(User, id=user_id)

            serializer = UserSerializer(user, data=json_data, partial=True)
            
            if serializer.is_valid():
                serializer.save()
                return JsonResponse({'message': f'{user.name}\'s details were updated successfully'})
            else:
                return JsonResponse({'errors': serializer.errors}, status=400)

        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON data'}, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)

# Delete a user by ID
def delete_user(request, user_id):
    if request.method == 'DELETE':
        user = get_object_or_404(User, id=user_id)
        user.delete()
        return JsonResponse({'message': f'{user.name}\'s details were deleted successfully'})
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)
