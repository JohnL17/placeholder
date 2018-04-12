"""Views for the admin interface."""

from django.contrib import admin
from django.contrib.admin import ModelAdmin

from placeholder.api import models


@admin.register(models.User)
class UserAdmin(ModelAdmin):
    """User admin view."""

    list_display = ['username']
    search_fields = ['username']


@admin.register(models.Post)
class PostAdmin(ModelAdmin):
    """Post admin view."""

    list_display = ['title', 'body']
    search_fields = ['title', 'body']


@admin.register(models.Comment)
class CommentAdmin(ModelAdmin):
    """Comment admin view."""

    list_display = ['title', 'email', 'body']
    search_fields = ['title', 'email', 'body']


@admin.register(models.Album)
class AlbumAdmin(ModelAdmin):
    """Album admin view."""

    list_display = ['title']
    search_fields = ['title']


@admin.register(models.Photo)
class PhotoAdmin(ModelAdmin):
    """Photo admin view."""

    list_display = ['title', 'url']
    search_fields = ['title', 'url']
