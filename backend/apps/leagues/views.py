from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse

from .models import League
from .serializers import LeagueSerializer

from rest_framework import viewsets

# Create your views here.

def newLeague(request):
    return render(request, 'leagues/newLeague.html')

def createLeague(request):
    owner = request.user
    name = request.POST["leagueName"]
    league = League(name=name, owner=owner)
    league.save()
    return HttpResponseRedirect(reverse('main:index'))

class LeagueView(viewsets.ModelViewSet):
    serializer_class = LeagueSerializer
    queryset = League.objects.all()     
