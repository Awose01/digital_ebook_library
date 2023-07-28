# ebooks/views.py

from rest_framework import generics
from .models import Ebook
from .serializers import EbookSerializer
from rest_framework.permissions import AllowAny


class EbookListView(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = Ebook.objects.all()
    serializer_class = EbookSerializer


class EbookCreateView(generics.CreateAPIView):
    permission_classes = [AllowAny]
    queryset = Ebook.objects.all()
    serializer_class = EbookSerializer


class EbookDetailView(generics.RetrieveAPIView):
    permission_classes = [AllowAny]
    queryset = Ebook.objects.all()
    serializer_class = EbookSerializer
    lookup_field = 'title'


class EbookUpdateView(generics.UpdateAPIView):
    permission_classes = [AllowAny]
    queryset = Ebook.objects.all()
    serializer_class = EbookSerializer
    lookup_field = 'title'


class EbookDeleteView(generics.DestroyAPIView):
    permission_classes = [AllowAny]
    queryset = Ebook.objects.all()
    serializer_class = EbookSerializer
    lookup_field = 'title'
