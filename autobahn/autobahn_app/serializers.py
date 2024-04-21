from rest_framework import serializers
from .models import CarListing

class CarListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarListing
        fields = '__all__'  # Or list specific fields like ['name', 'price', 'mileage', 'link', 'raw_data']
