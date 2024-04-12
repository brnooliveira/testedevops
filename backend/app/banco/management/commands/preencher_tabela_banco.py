from django.core.management.base import BaseCommand
from banco.models import Banco
import pandas as pd


class Command(BaseCommand):
    help = 'Preenche a tabela banco com os dados do arquivo bancos.csv'

    def handle(self, *args, **kwargs):
        df = pd.read_excel('bancos.xls')
        new_banco_created = False
        for index, row in df.iterrows():
            banco, created = Banco.objects.get_or_create(
                codigo=row['Código de compensação'],
                nome=row['Nome Instituição']
            )
            if created:
                new_banco_created = True

        if new_banco_created:
            self.stdout.write(self.style.SUCCESS('Dados Inseridos com Sucesso!'))
        else:
            self.stdout.write(self.style.WARNING('Todos os dados ja foram inseridos!'))