# ebooks/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('ebooks/', views.EbookListView.as_view(), name='ebooks'),
    path('ebooks/create/', views.EbookCreateView.as_view(), name='create_ebook'),
    path('ebooks/<str:title>/', views.EbookDetailView.as_view(), name='retrieve_ebook'),
    path('ebooks/<str:title>/update/', views.EbookUpdateView.as_view(), name='update_ebook'),
    path('ebooks/<str:title>/delete/', views.EbookDeleteView.as_view(), name='delete_ebook'),
]
