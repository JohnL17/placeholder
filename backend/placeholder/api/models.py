"""Models fot the backend."""

from django.contrib.auth.models import AbstractUser
from django.db import models

# from django.db import models


class User(AbstractUser):
    """User model.

    A user can write posts and comments on posts.
    """

    pass


class Post(models.Model):
    """Post model.

    Every user can write posts. Posts can have comments.
    """

    title   = models.CharField(max_length=255)
    body    = models.TextField(blank=True)
    user    = models.ForeignKey('User', on_delete=models.CASCADE)

    def __str__(self):
        """Represent the model as a string.

        :return: The string representation
        :rtype:  str
        """
        return self.title


class Comment(models.Model):
    """Comment model.

    Every user can write a comment on a post.
    """

    title   = models.CharField(max_length=255)
    email   = models.CharField(max_length=255)
    body    = models.TextField(blank=True)
    post    = models.ForeignKey('Post', on_delete=models.CASCADE)

    def __str__(self):
        """Represent the model as a string.

        :return: The string representation
        :rtype: str
        """
        return self.title


class Album(models.Model):
    """Album model.

    Every user can create a album with photos.
    """

    title   = models.CharField(max_length=255)
    user    = models.ForeignKey('User', on_delete=models.CASCADE)

    def __str__(self):
        """Represent the model as a string.

        :return: The string representation
        :rtype: str
        """
        return self.title


class Photo(models.Model):
    """Photo model.

    Every user can add photos to his albums.
    """

    title           = models.CharField(max_length=255)
    url             = models.CharField(max_length=255)
    thumbnail_url   = models.CharField(max_length=255)
    album           = models.ForeignKey('Album', on_delete=models.CASCADE)

    def __str__(self):
        """Represent the model as a string.

        :return: The string representation
        :rtype: str
        """
        return self.title
