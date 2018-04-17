"""Models fot the backend."""

from django.contrib.auth.models import AbstractUser
from django.db import models


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

    title           = models.CharField(max_length=255, null=True)
    url             = models.CharField(max_length=255, null=False)
    album           = models.ForeignKey('Album', related_name='photos',
                                        on_delete=models.CASCADE)

    def __str__(self):
        """Represent the model as a string.

        :return: The string representation
        :rtype: str
        """
        return self.title
