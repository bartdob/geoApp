from django.contrib.auth.models import User
from django.urls import reverse
from rest_framework.status import HTTP_200_OK
from rest_framework.test import APIClient
from rest_framework_simplejwt.tokens import RefreshToken

import pytest


@pytest.fixture
def api_client():
    user = User.objects.create_user(username='john', email='js@js.com', password='js.sj')
    client = APIClient()
    refresh = RefreshToken.for_user(user)
    print(refresh.access_token)
    client.credentials(HTTP_AUTHORIZATION=f'Bearer {refresh.access_token}')

    return client


@pytest.mark.django_db
def test_name_of_your_test(api_client):
    # Add your logic here
    url = reverse('all_loc')
    response = api_client.get(url)
    # data = response.data

    assert response.status_code == HTTP_200_OK
