# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.test import TestCase

from leagues.models import League
from users.models import User
from django.test import Client
from django.urls import reverse


# Create your tests here.
class MainTest(TestCase):
    #Views#
    def createUser(self):
        return User.objects.create(username="Test")

    def test_home_page(self):
        c = Client()
        user = self.createUser()
        user.set_password('password')
        user.save()
        c.login(username="Test", password="password")

        league = League.objects.create(name="TestLeague", owner=user)
        league.save()

        url = reverse("main:index")
        resp = c.get(url)
        self.assertEqual(resp.status_code, 200)
        self.assertIn(league.name.encode(), resp.content)
