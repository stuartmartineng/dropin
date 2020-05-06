from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from leagues.models import League
from django.views.generic.detail import DetailView


# def index(request):
#     leagues = League.objects.filter(owner=request.user)
#     context = {
#         'leagues': leagues
#     }
#     return render(request, 'home/home.html', context)

def index(request):
    return render(request, 'frontend/index.html')
