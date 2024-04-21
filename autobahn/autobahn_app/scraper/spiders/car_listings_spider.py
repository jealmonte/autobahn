from bs4 import BeautifulSoup
import requests
import pandas as pd 
import scrapy
import json
from autobahn_app.models import CarListing

class CarListingsSpider(scrapy.Spider):
    name = 'car_listings'
    allowed_domains = ['autotrader.com', 'cars.com', 
                       'enterprisecarsales.com']
    start_urls = [
        'https://www.autotrader.com/cars-for-sale/',
        'https://www.cars.com/shopping/',
        'https://www.enterprisecarsales.com/list/used-cars'
    ]

    def __init__(self, year=None, make=None, model=None, bodyType=None, *args, **kwargs):
        super(CarListingsSpider, self).__init__(*args, **kwargs)
        self.year = year
        self.make = make
        self.model = model
        self.bodyType = bodyType
        website_urls = {
            'autotrader.com': f'https://www.autotrader.com/cars-for-sale/{year}/{make}/{model}',
            'cars.com': f'https://www.cars.com/shopping/{make}-{model}-{year}/',
            'enterprisecarsales.com': f'https://www.enterprisecarsales.com/list/buy-a-car/models-{make}-{model}/years-{year}--{year}/',
        }

    def parse(self, response):
        soup = BeautifulSoup(response.text, 'html.parser')

        if 'autotrader.com' in response.url:
            website = 'https://www.autotrader.com/cars-for-sale/2020/honda/accord'
            response = requests.get(website)
            response.status_code
            soup = BeautifulSoup(response.content, 'html.parser')
            results = soup.find_all('div', {'class' : 'col-xs-12 col-sm-4 display-flex'})
            len(results)
            mileage = []
            name = []
            price = []
            image = []

            for result in results:
                # name
                try:
                    name.append(result.find('h2').get_text())
                except:
                    name.append('n/a')
                # mileage
                try:
                    mileage.append(result.find('div', {'class':'text-bold text-subdued-lighter'}).get_text())
                except:
                    mileage.append('n/a')
                #price 
                try:
                    price.append(result.find('div', {'class':'text-size-600 text-ultra-bold first-price', 'data-cmp':'firstPrice'}).get_text())
                except:
                    price.append('n/a')
                #image
                try:
                    img_tag = result.find('img', {'class': 'img-responsive-scale img-vertically-aligned'})
                    if img_tag:
                        image.append(img_tag['src'])
                except:
                    image.append('n/a')

            for name_value, price_value, mileage_value, image_value in zip(name, price, mileage, image):
                car_listing = CarListing(
                    name=name_value,
                    price=price_value,
                    mileage=mileage_value,
                    image=image_value,  # This will now always be a valid element
                    link=response.url,
                    raw_data=json.dumps({'name': name_value, 'price': price_value, 'mileage': mileage_value, 'image': image_value})
                )
                car_listing.save()


        elif 'cars.com' in response.url:
            website = 'https://www.cars.com/shopping/results/?stock_type=used&makes%5B%5D=honda&models%5B%5D=honda-accord&maximum_distance=30&zip=20741'
            response = requests.get(website)
            response.status_code
            soup = BeautifulSoup(response.content, 'html.parser')
            results = soup.find_all('div', {'class' : 'vehicle-card'})
            len(results)
            mileage = []
            name = []
            price = []
            image = []

            for result in results:
                # name
                try:
                    name.append(result.find('h2').get_text()) 
                except:
                    name.append('n/a')
                # mileage
                try:
                    mileage.append(result.find('div', {'class':'mileage'}).get_text())
                except:
                    mileage.append('n/a')
                #price 
                try:
                    price.append(result.find('span', {'class':'primary-price'}).get_text())
                except:
                    price.append('n/a')
                # image
                try:
                    img_tag = result.find('img', {'class': 'vehicle-image'})
                    if img_tag:
                        image.append(img_tag['src'])
                except:
                    image.append('n/a')

            for name_value, price_value, mileage_value, image_value in zip(name, price, mileage, image):
                car_listing = CarListing(
                    name=name_value,
                    price=price_value,
                    mileage=mileage_value,
                    image=image_value,  # This will now always be a valid element
                    link=response.url,
                    raw_data=json.dumps({'name': name_value, 'price': price_value, 'mileage': mileage_value, 'image': image_value})
                )
                car_listing.save()

        elif 'enterprisecarsales.com' in response.url:
            website = 'https://www.enterprisecarsales.com/list/buy-a-car/models-Honda-Accord_Sedan/years-2019--2019/?zipcode=20740'
            response = requests.get(website)
            response.status_code
            soup = BeautifulSoup(response.content, 'html.parser')
            results = soup.find_all('div', {'class' : 'vehicle vehicle-grid-item'})
            len(results)
            mileage = []
            name = []
            price = []
            image = []

            for result in results:
                # Extract the data-vehicle attribute
                vehicle_data = result.get('data-vehicle')
                
                if vehicle_data:
                    # Parse the JSON string
                    vehicle_dict = json.loads(vehicle_data)
                    
                    # Extract name
                    name_text = f"{vehicle_dict.get('year')} {vehicle_dict.get('make')} {vehicle_dict.get('model')} {vehicle_dict.get('trim')}"
                    name.append(name_text)
                    
                    # Extract mileage
                    mileage.append(vehicle_dict.get('mileage'))
                    
                    # Extract price  
                    price.append(vehicle_dict.get('price'))

                    # Extract image
                    picture_tag = result.find('picture')
                    if picture_tag:
                        img_tag = picture_tag.find('img')
                        if img_tag:
                            image.append(img_tag['src'])
                else:                    
                    name.append('n/a')
                    mileage.append('n/a')
                    price.append('n/a')
                    image.append('n/a')

            for name_value, price_value, mileage_value, image_value in zip(name, price, mileage, image):
                car_listing = CarListing(
                    name=name_value,
                    price=price_value,
                    mileage=mileage_value,
                    image=image_value,  # This will now always be a valid element
                    link=response.url,
                    raw_data=json.dumps({'name': name_value, 'price': price_value, 'mileage': mileage_value, 'image': image_value})
                )
                car_listing.save()
