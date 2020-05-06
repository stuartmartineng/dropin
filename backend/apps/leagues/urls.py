from django.contrib import admin
from django.urls import include, path

from . import views
app_name = 'leagues'
urlpatterns = [
    path('newLeague', views.newLeague, name='newLeague'),
    path('createLeague', views.createLeague, name='createLeague')
]