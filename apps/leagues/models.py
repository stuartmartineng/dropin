from django.db import models

# Create your models here.
class League(models.Model):
    name = models.CharField(max_length=200)
    owner = models.ForeignKey('users.User', on_delete=models.PROTECT)
    def __str__(self):
        return self.name