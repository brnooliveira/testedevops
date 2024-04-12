from rest_framework.generics import ListAPIView
from rest_framework.renderers import JSONRenderer
from banco.models import Banco
from banco.serializers import BancoSerializer
from django_filters.rest_framework import DjangoFilterBackend


class BancoListView(ListAPIView):
    queryset = Banco.objects.all()
    serializer_class = BancoSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['codigo']
    renderer_classes = [JSONRenderer]

    def get(self, request, *args, **kwargs):
        self.renderer_classes = [JSONRenderer]
        return super().get(request, *args, **kwargs)