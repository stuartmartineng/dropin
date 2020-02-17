from django.db import models

# Create your models here.
class Team(models.Model):
    name = models.CharField(max_length=200)
    league = models.ForeignKey("leagues.League", on_delete=models.CASCADE)
    players = models.ManyToManyField("users.User")
    def __str__(self):
        return self.name
