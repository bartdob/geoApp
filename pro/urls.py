from django.contrib import admin
from django.http import HttpResponse, JsonResponse, Http404, HttpResponseRedirect
from django.urls import path, include
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt
from rest_framework import routers, serializers, viewsets, status
from rest_framework.parsers import JSONParser
from rest_framework.response import Response

from backend.serializers import GeoLocationSerializer
from backend.models import GeoLocation
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


# Serializers define the API representation.
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'url', 'username', 'email', 'is_staff']


# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    # permission_classes = [IsAuthenticated]


class GeoLoctionViewSet(viewsets.ModelViewSet):
    queryset = GeoLocation.objects.all()
    serializer_class = GeoLocationSerializer
    # authentication_classes = [SessionAuthentication, BasicAuthentication]

    # authentication_classes = [SessionAuthentication, BasicAuthentication]
    # permission_classes = [IsAuthenticated]

    # @csrf_exempt
    # def get_queryset(self):
    #     return self.request.GeoLocation.all()
    #
    # def list(self, request):
    #     geo = GeoLocation.objects.all()
    #     serializer = GeoLocationSerializer(geo, many=True)
    #     return JsonResponse(serializer.data, safe=False)
    #
    # def create(self, request):
    #     pass
    #
    # def retrieve(self, request, pk=None):
    #     pass
    #
    # def update(self, request, pk=None):
    #     pass
    #
    # def partial_update(self, request, pk=None):
    #     pass
    #
    # def destroy(self, request, pk=None):
    #     pass
    @csrf_exempt
    def geoLocation_list(self, request):
        """
        List all code snippets, or create a new snippet.
        """

        if request.method == 'GET':
            print("GET GET LOC")
            geo = GeoLocation.objects.all()
            serializer = GeoLocationSerializer(geo, many=True)
            return JsonResponse(serializer.data, safe=False)

        if request.method == 'POST':
            data = JSONParser().parse(request)
            print("POST GET LOC")
            print(data)
            serializer = GeoLocationSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse(serializer.data, status=201)
            return JsonResponse(serializer.errors, status=400)

    # def delete(self, request, *args, **kwargs):
    #     """
    #     Call the delete() method on the fetched object and then redirect to the
    #     success URL.
    #     """
    #     self.object = self.get_object()
    #     success_url = self.get_success_url()
    #     self.object.delete()
    #     return HttpResponseRedirect(success_url)
    @csrf_exempt
    def delete(self, request, pk, format=None):
        geo = self.get_object(pk)
        geo.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
# router = routers.SimpleRouter()
router.register(r'users', UserViewSet)
# router.register(r'location-api', GeoLoctionViewSet)
router.register(r'location-api', GeoLoctionViewSet)
#router.register(r'location-api/<int:pk>', GeoDestoryViewset)
# router.register(r'create-ip', GeoLoctionViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('location/', include('backend.urls')),
]
