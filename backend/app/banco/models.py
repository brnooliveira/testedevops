from django.db import models


class Banco(models.Model):
    codigo = models.IntegerField()
    nome = models.CharField(max_length=250)

    def __str__(self):
        return self.nome