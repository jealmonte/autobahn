from django.db import models
from django.contrib.postgres.fields import JSONField  # If you're using PostgreSQL

class CarListing(models.Model):
    name = models.CharField(max_length=255)
    price = models.CharField(max_length=255)
    mileage = models.CharField(max_length=255)
    image = models.ImageField(upload_to='car_images/', blank=True, null=True)
    link = models.URLField()
    raw_data = models.JSONField()  # Optional: to store the entire JSON object

    