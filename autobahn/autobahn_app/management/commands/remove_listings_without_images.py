from django.core.management.base import BaseCommand
from autobahn_app.models import CarListing

class Command(BaseCommand):
    help = 'Remove listings without images from the database'

    def handle(self, *args, **options):
        # Delete listings where image is None or an empty string
        deleted_count, _ = CarListing.objects.filter(image__isnull=True).delete()
        deleted_count += CarListing.objects.filter(image__exact='').delete()[0]

        self.stdout.write(self.style.SUCCESS(f'Successfully removed {deleted_count} listings without images'))
