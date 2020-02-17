from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse

from .models import League

# Create your views here.

def newLeague(request):
    return render(request, 'leagues/newLeague.html')

def createLeague(request):
    owner = request.user
    name = request.POST["leagueName"]
    league = League(name=name, owner=owner)
    league.save()
    return HttpResponseRedirect(reverse('main:index'))
