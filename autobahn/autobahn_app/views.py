from django.shortcuts import render
import json
from django.http import JsonResponse
from scrapy.crawler import CrawlerProcess
from .scraper.spiders.car_listings_spider import CarListingsSpider
from rest_framework import generics
from .models import CarListing
from .serializers import CarListingSerializer

class CarListingList(generics.ListAPIView):  # Use ListAPIView for read-only endpoints
    queryset = CarListing.objects.all()
    serializer_class = CarListingSerializer

class CarListingListCreate(generics.ListCreateAPIView):
    queryset = CarListing.objects.all()
    serializer_class = CarListingSerializer

def scrape_car_listings(request):
    process = CrawlerProcess(settings={
        'FEED_FORMAT': 'json',
        'FEED_URI': 'items.json'
    })
    process.crawl(CarListingsSpider)
    process.start()

    with open("items.json") as f:
        data = json.load(f)

    return JsonResponse(data, safe=False)
