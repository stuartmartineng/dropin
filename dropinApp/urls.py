from django.contrib import admin
from django.urls import include, path

from . import views
app_name = 'dropin'
urlpatterns = [
    path('', views.index, name='index'),
    path('newLeague', views.newLeague, name='newLeague'),
    path('createLeague', views.createLeague, name='createLeague')
]