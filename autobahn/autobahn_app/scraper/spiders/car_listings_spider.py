import scrapy

class CarListingsSpider(scrapy.Spider):
    name = 'car_listings'
    allowed_domains = ['carmax.com', 'carvana.com', 'autotrader.com', 'cars.com', 'cargurus.com', 
                       'edmunds.com', 'enterprisecarsales.com', 'hertzcarsales.com']
    start_urls = [
        'https://www.carmax.com', #works
        'https://www.carvana.com/cars', #doesn't work
        'https://www.autotrader.com/cars-for-sale/', #works
        'https://www.cars.com/shopping/', #works
        'https://www.cargurus.com/Cars/inventorylisting/viewDetailsFilterViewInventoryListing.action', #doesn't work
        'https://www.edmunds.com/inventory/srp.html', #works
        'https://www.enterprisecarsales.com/list/used-cars', #works but very specific
        'https://www.hertzcarsales.com/used-cars-for-sale.htm'#works but very specific
    ]

    def __init__(self, year=None, make=None, model=None, *args, **kwargs):
        super(CarListingsSpider, self).__init__(*args, **kwargs)
        self.year = year
        self.make = make
        self.model = model

        website_urls = {
            'carmax.com': f'https://www.carmax.com/cars/{make}/{model}/{year}',
            'carvana.com': f'https://www.carvana.com/cars/{make}/{model}/{year}',
            'autotrader.com': f'https://www.autotrader.com/cars-for-sale/{year}/{make}/{model}',
            'cars.com': f'https://www.cars.com/shopping/{make}-{model}-{year}/',
            'cargurus.com': f'https://www.cargurus.com/Cars/inventorylisting/viewDetailsFilterViewInventoryListing.action?zip=12345&showNegotiablePriceListings=true&modelChanged=false&filtersModified=true&distance=50&sortDir=ASC&sortType=DEAL_SCORE&entitySelectingHelper.selectedEntity={year}+{make}+{model}',
            'edmunds.com': f'https://www.edmunds.com/{make}/{model}/{year}/'.lower(),
            'enterprisecarsales.com': f'https://www.enterprisecarsales.com/list/buy-a-car/models-{make}-{model}/years-{year}--{year}/',
            'hertzcarsales.com': f'https://www.hertzcarsales.com/used-cars-for-sale.htm?make={make}&model={model}&year={year}'
        }

        self.start_urls = [website_urls[allowed_domain] for allowed_domain in self.allowed_domains]

    def parse(self, response):
        # Extract data based on the website
        if 'carmax.com' in response.url:
            for listing in response.css('div.car-tile'):
                title = ' '.join(listing.css('h3 span::text').getall())
                if self.year in title and self.make in title and self.model in title:
                    price_miles_info = listing.css('.sc--price-miles-info.kmx-typography--body-3::text').getall()
                    price = price_miles_info[0].strip('$').replace(',', '')
                    mileage = price_miles_info[1].strip().split()[0].replace(',', '')
                    yield {
                        'title': title,
                        'price': price,
                        'mileage': mileage,
                        'link': listing.css('a::attr(href)').get()
                    }
        elif 'carvana.com' in response.url:
            # Parse Carvana listings 
            pass
        elif 'autotrader.com' in response.url:
            # Parse Carvana listings 
            pass
        elif 'cars.com' in response.url:
            # Parse Carvana listings 
            pass
        elif 'cargurus.com' in response.url:
            # Parse Carvana listings 
            pass
        elif 'edmunds.com' in response.url:
            # Parse Carvana listings 
            pass
        elif 'enterprisecarsales.com' in response.url:
            # Parse Carvana listings 
            pass
        elif 'hertzcarsales.com' in response.url:
            # Parse Carvana listings 
            pass

        # Follow pagination links
        next_page = response.css('a.next-page::attr(href)').get()
        if next_page is not None:
            yield response.follow(next_page, callback=self.parse)