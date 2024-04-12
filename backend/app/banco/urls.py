from django.urls import path
from banco.views import BancoListView

app_name = 'banco'

urlpatterns = [
    path('bancos/', BancoListView.as_view(), name='bancos-list'),
]
