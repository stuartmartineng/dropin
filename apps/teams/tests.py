# Create your tests here.
from django.test import TestCase
from leagues.models import League
from users.models import User
from .models import Team

# Create your tests here.
class TeamTest(TestCase):
    def createUser(self):
        return User.objects.create(username="Test")

    #Models#
    def test_create_team(self):
        user = self.createUser()
        league = League.objects.create(name="Test League", owner=user)
        team = Team.objects.create(name="Test Team", league=league)
        self.assertTrue(isinstance(team, Team))
        self.assertEqual(team.__str__(), team.name)