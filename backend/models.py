from django.db import models
from django.contrib.auth.models import User


class GeoLocation(models):
    userLocations = models.ForeignKey(User, on_delete=models.CASCADE)
    ipLocation = models.TextField(max_length=100)
