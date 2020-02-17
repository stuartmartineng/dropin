from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from leagues.models import League


def index(request):
    leagues = League.objects.filter(owner=request.user)
    context = {
        'leagues': leagues
    }
    return render(request, 'home/home.html', context)

