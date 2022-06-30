from django.urls import path
from . import views

urlpatterns = [
    path('', views.allLoc, name='all_loc'),
    path('ip/new/', views.addIp, name='addIp'),
    path('ip/create/', views.createIP, name='create-ip'),
    path('ip/del/<int:ip_id>/', views.deleteIp, name='deleteIp'),
]
