from rest_framework import serializers
from backend.serializers import GeoLocationSerializer
import pytest


@pytest.mark.django_db
class TestToolSerializer:

    @pytest.fixture(autouse=True)
    def setup_method(self, db, tool_factory):
        self.serializer_data = {
            'userLocations': 1,
            'ipLocation': 'test1',
            'name': 'test'}

        self.tool = tool_factory(**self.tool_attributes)
        self.serializer = GeoLocationSerializer(instance=self.tool)

