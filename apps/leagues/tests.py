# Create your tests here.
from django.test import TestCase
from .models import League
from users.models import User
from django.urls import reverse
from django.test import Client

class LeagueTest(TestCase):
    def createUser(self):
        return User.objects.create(username="Test")
    #Models#
    def test_create_league(self):
        user = self.createUser()
        league = League.objects.create(name="Test League", owner=user)
        self.assertTrue(isinstance(league, League))
        self.assertEqual(league.__str__(), league.name)

    #Views#
    def test_new_league(self):
        url = reverse("leagues:newLeague")
        resp = self.client.get(url)

        self.assertEqual(resp.status_code, 200)

    def test_save_league(self):
        c = Client()
        user = self.createUser()
        user.set_password('password')
        user.save()
        c.login(username="Test", password="password")
        response = c.post(reverse('leagues:createLeague'), {'leagueName': 'testLeague'})

        testLeague = League.objects.get(name="testLeague")
        self.assertEqual(testLeague.name, 'testLeague')