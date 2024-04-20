import os
import sys
import django

sys.path.append(os.path.dirname(os.path.abspath('.')))
os.environ['DJANGO_SETTINGS_MODULE'] = 'autobahn.settings'

django.setup()

BOT_NAME = 'autobahn_app'
SPIDER_MODULES = ['autobahn_app.scraper.spiders']
