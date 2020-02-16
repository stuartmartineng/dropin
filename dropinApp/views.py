from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from .models import League
from django.urls import reverse


def index(request):
    leagues = League.objects.filter(owner=request.user)
    context = {
        'leagues': leagues
    }
    return render(request, 'home/home.html', context)

def newLeague(request):
    return render(request, 'league/newLeague.html')

def createLeague(request):
    owner = request.user
    name = request.POST["leagueName"]
    league = League(name=name, owner=owner)
    league.save()
    return HttpResponseRedirect(reverse('dropin:index'))
