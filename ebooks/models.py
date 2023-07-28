# ebooks/models.py

from django.db import models

class Ebook(models.Model):
    title = models.CharField(max_length=200, unique=True, db_index=True)
    author = models.CharField(max_length=200)
    publication_year = models.IntegerField()
    cover_image_url = models.CharField(max_length=200)
    ebook_link = models.CharField(max_length=200)

    def __str__(self):
        return self.title
