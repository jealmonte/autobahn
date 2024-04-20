from bs4 import BeautifulSoup
import requests
import pandas as pd 
import scrapy
import json

class CarListingsSpider(scrapy.Spider):
    name = 'car_listings'
    allowed_domains = ['carmax.com', 'autotrader.com', 'cars.com', 'cargurus.com', 
                       'edmunds.com', 'enterprisecarsales.com', 'hertzcarsales.com']
    start_urls = [
        'https://www.carmax.com',
        'https://www.autotrader.com/cars-for-sale/',
        'https://www.cars.com/shopping/',
        'https://www.cargurus.com/Cars/inventorylisting/viewDetailsFilterViewInventoryListing.action',
        'https://www.edmunds.com/inventory/srp.html',
        'https://www.enterprisecarsales.com/list/used-cars',
        'https://www.hertzcarsales.com/used-cars-for-sale.htm'
    ]

    def __init__(self, year=None, make=None, model=None, *args, **kwargs):
        super(CarListingsSpider, self).__init__(*args, **kwargs)
        self.year = year
        self.make = make
        self.model = model
        website_urls = {
            'carmax.com': f'https://www.carmax.com/cars/{make}/{model}/{year}',
            'autotrader.com': f'https://www.autotrader.com/cars-for-sale/{year}/{make}/{model}',
            'cars.com': f'https://www.cars.com/shopping/{make}-{model}-{year}/',
            'cargurus.com': f'https://www.cargurus.com/Cars/inventorylisting/viewDetailsFilterViewInventoryListing.action?zip=12345&showNegotiablePriceListings=true&modelChanged=false&filtersModified=true&distance=50&sortDir=ASC&sortType=DEAL_SCORE&entitySelectingHelper.selectedEntity={year}+{make}+{model}',
            'edmunds.com': f'https://www.edmunds.com/{make}/{model}/{year}/'.lower(),
            'enterprisecarsales.com': f'https://www.enterprisecarsales.com/list/buy-a-car/models-{make}-{model}/years-{year}--{year}/',
            'hertzcarsales.com': f'https://www.hertzcarsales.com/used-cars-for-sale.htm?make={make}&model={model}&year={year}'
        }

    def parse(self, response):
        soup = BeautifulSoup(response.text, 'html.parser')

        if 'carmax.com' in response.url:
            listings = soup.select('div.cars-listing')
            for listing in listings:
                title = listing.select_one('span.sc--make-model-container').text
                if self.year in title and self.make in title and self.model in title:
                    price = listing.select_one('span.sc--price-miles-info--price').text.strip('$*').replace(',', '')
                    mileage = listing.select_one('span.sc--price-miles-info--miles').text.strip().split()[0].replace(',', '')
                    link = listing.select_one('a.make-model-link.kmx-list-item-link')['href']
                    self.print_listing(title, price, mileage, link)
                    yield {
                        'title': title,
                        'price': price,
                        'mileage': mileage,
                        'link': link
                    }

        # elif 'autotrader.com' in response.url:
        #     listings = soup.select('div[data-cmp="vehicle-card"]')
        #     for listing in listings:
        #         year_make_model = listing.select_one('h2[data-cmp="vehicleCardYearMakeModel"]').text
        #         if self.year in year_make_model and self.make in year_make_model and self.model in year_make_model:
        #             price = listing.select_one('div[data-cmp="firstPrice"]').text.strip().replace(',', '')
        #             mileage = listing.select_one('div[data-cmp="vehicleMileage"]').text.strip().split()[0].replace(',', '')
        #             link = 'https://www.autotrader.com' + listing.select_one('a[data-qaid="lnk-vehicle-tile"]')['href']
        #             self.print_listing(year_make_model, price, mileage, link)
        #             yield {
        #                 'title': year_make_model,
        #                 'price': price,
        #                 'mileage': mileage,
        #                 'link': link
        #             }

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
            for i in range(len(name)):
                print(f"{name[i]}, Mileage: {mileage[i]}, Price: {price[i]}") 

        # elif 'edmunds.com' in response.url:
        #     website = 'https://www.edmunds.com/honda/accord/2018/'
        #     response = requests.get(website)
        #     response.status_code
        #     soup = BeautifulSoup(response.content, 'html.parser')
        #     results = soup.find_all('div', {'class' : 'd-flex mb-0_75 mb-md-1_5 col-12 col-md-6'})
        #     len(results)
        #     mileage = []
        #     name = []
        #     price = []

        #     for result in results:
        #         # name
        #         try:
        #             name.append(result.find('h2').get_text()) 
        #         except:
        #             name.append('n/a')
        #         # mileage
        #         try:
        #             mileage.append(result.find('div', {'class':'text-cool-gray-30'}).get_text())
        #         except:
        #             mileage.append('n/a')
        #         #price 
        #         try:
        #             price.append(result.find('span', {'class':'heading-3'}).get_text())
        #         except:
        #             price.append('n/a')
        #     for i in range(len(name)):
        #         print(f"{name[i]}, Mileage: {mileage[i]}, Price: {price[i]}")

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
                else:
                    name.append('n/a')
                    mileage.append('n/a')
                    price.append('n/a')
            for i in range(len(name)):
                print(f"{name[i]}, Mileage: {mileage[i]}, Price: {price[i]}") 

        # elif 'hertzcarsales.com' in response.url:
        #     website = 'https://www.hertzcarsales.com/used-cars-for-sale.htm?make=Honda&model=Accord&geoZip=20740&geoRadius=0'
        #     response = requests.get(website)
        #     response.status_code
        #     soup = BeautifulSoup(response.content, 'html.parser')
        #     results = soup.find_all('div', {'class' : 'box box-border vehicle-card vehicle-card-detailed vehicle-offsite'})
        #     len(results)
        #     mileage = []
        #     name = []
        #     price = []

        #     for result in results:
        #         # name
        #         try:
        #             name.append(result.find('h2').get_text()) 
        #         except:
        #             name.append('n/a')
        #         # mileage
        #         try:
        #             mileage.append(result.find('div', {'class':'odometer'}).get_text())
        #         except:
        #             mileage.append('n/a')
        #         #price 
        #         try:
        #             price.append(result.find('span', {'class':'text-right portal-price'}).get_text())
        #         except:
        #             price.append('n/a')
        #     for i in range(len(name)):
        #         print(f"{name[i]}, Mileage: {mileage[i]}, Price: {price[i]}")   

        # Follow pagination links
        next_page = soup.select_one('a.next-page')
        if next_page:
            next_page_url = next_page['href']
            yield response.follow(next_page_url, callback=self.parse)

        def print_listing(self, title, price, mileage, link):
            print(f"Title: {title}, Price: {price}, Mileage: {mileage}, Link: {link}")