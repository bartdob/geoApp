from django.shortcuts import render
from django.http import HttpResponseRedirect
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from backend.models import GeoLocation


def allLoc(request):

    geo = GeoLocation.objects.all()

    context = {
        'geo': geo,
    }
    return render(request, 'backend/login.html', context)


def addIp(request, user_id):
    user = User.objects.get(id=user_id)
    print('USER', user)
    new = GeoLocation(ipLocation=request.POST['ipLocation'], userLocations=request.POST[user],
                      name=request.POST['name'])
    if len(request.POST['ipLocation']) > 2:
        new.save()
    return HttpResponseRedirect('/')


def deleteIp(request, ip_id):
    item_to_del = GeoLocation.objects.get(id=ip_id)
    item_to_del.delete()
    return HttpResponseRedirect('/')