from django.shortcuts import get_object_or_404, render
from django.http import JsonResponse
from .models import Collection

# Create a new collection
def create_collection(request):
    if request.method == 'POST':
        merchant_id = request.POST.get('merchantId')
        name = request.POST.get('name')
        cost = request.POST.get('cost')
        currently_minted = request.POST.get('currentlyMinted')
        total_available = request.POST.get('totalAvailable')

        collection = Collection(
            merchant_id=merchant_id,
            name=name,
            cost=cost,
            currently_minted=currently_minted,
            total_available=total_available
        )
        collection.save()
        return JsonResponse({'message': 'Collection created successfully'})

# Read a collection by ID
def read_collection(request, collection_id):
    collection = get_object_or_404(Collection, id=collection_id)
    data = {
        'id': collection.id,
        'merchantId': collection.merchant_id,
        'name': collection.name,
        'cost': collection.cost,
        'currentlyMinted': collection.currently_minted,
        'totalAvailable': collection.total_available,
    }
    return JsonResponse(data)

# Update a collection by ID
def update_collection(request, collection_id):
    if request.method == 'PUT':
        collection = get_object_or_404(Collection, id=collection_id)
        collection.merchant_id = request.PUT.get('merchantId')
        collection.name = request.PUT.get('name')
        collection.cost = request.PUT.get('cost')
        collection.currently_minted = request.PUT.get('currentlyMinted')
        collection.total_available = request.PUT.get('totalAvailable')
        collection.save()
        return JsonResponse({'message': 'Collection updated successfully'})

# Delete a collection by ID
def delete_collection(request, collection_id):
    if request.method == 'DELETE':
        collection = get_object_or_404(Collection, id=collection_id)
        collection.delete()
        return JsonResponse({'message': 'Collection deleted successfully'})
