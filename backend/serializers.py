from .models import GeoLocation
from rest_framework import serializers


class GeoLocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = GeoLocation
        fields = ['id', 'url', 'userLocations', 'ipLocation', 'name']

    def create(self, validated_data):
        return GeoLocation.objects.create(**validated_data)
