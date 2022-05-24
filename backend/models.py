from django.db import models
from django.contrib.auth.models import User


class GeoLocation(models.Model):
    userLocations = models.ForeignKey(User, on_delete=models.CASCADE)
    ipLocation = models.TextField(max_length=100)
    name = models.CharField(max_length=100, default=None)

    def __str__(self):
        return self.name
