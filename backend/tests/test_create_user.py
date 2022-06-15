import json
from unittest import TestCase
import pytest
from django.contrib.auth.models import User
from django.urls import reverse
from rest_framework import status
from rest_framework_simplejwt.tokens import *
from rest_framework.test import APITestCase, APIClient
from backend import views
from backend.serializers import GeoLocationSerializer
from backend.models import GeoLocation

@pytest.mark.filterwarnings
@pytest.mark.django_db
def test_user_create():
    User.objects.create_user('test', 'test@test.pl', 'test')
    User.objects.create_user('test1', 'test1@test.pl', 'test1')
    assert User.objects.count() == 2
