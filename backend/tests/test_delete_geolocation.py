from django.contrib.auth.models import User
from backend.models import GeoLocation
import pytest


# @pytest.mark.skip('not now')
@pytest.mark.filterwarnings
@pytest.mark.django_db
def test_geoloaction_create():
    user1 = User.objects.create_user('test', 'test@test.pl', 'test')
    Geo1 = GeoLocation.objects.create(ipLocation='test', userLocations=user1, name='test')
    Geo2 = GeoLocation.objects.create(ipLocation='test2', userLocations=user1, name='test')
    Geo3 = GeoLocation.objects.create(ipLocation='test3', userLocations=user1, name='test')
    print(Geo3)
    Geo1.delete()
    Geo2.delete()
    assert GeoLocation.objects.count() == 1
