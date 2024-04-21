from django.urls import path
from .views import scrape_car_listings, CarListingList  # Import the CarListingList view

app_name = 'autobahn_app'  # Namespace for your app

urlpatterns = [
    path('scrape_listings/', scrape_car_listings, name='scrape_listings'),
    path('car_listings/', CarListingList.as_view(), name='car_listings'),  # Add this line for the car listings endpoint
    # Add other app-level URL patterns here
]
