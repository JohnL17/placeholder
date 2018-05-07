"""Serializers for the projects app."""
from rest_framework_json_api.serializers import ModelSerializer

from placeholder.api import models


class UserSerializer(ModelSerializer):
    """User serializer."""

    class Meta:
        """Meta information for the user serializer."""

        model = models.User
        fields = [
            'username',
            'email',
            'first_name',
            'last_name',
            'password',
        ]


class PostSerializer(ModelSerializer):
    """Post serializer."""

    class Meta:
        """Meta information for the post serializer."""

        model = models.Post
        fields = [
            'title',
            'body',
        ]


class CommentSerializer(ModelSerializer):
    """Comment serializer."""

    class Meta:
        """Meta information for the comment serializer."""

        model = models.Comment
        fields = [
            'title',
            'email',
            'body',
            'post',
        ]


class AlbumSerializer(ModelSerializer):
    """Album serializer."""

    included_serializers = {
        'photos': 'placeholder.api.serializers.PhotoSerializer'
    }

    class Meta:
        """Meta information for the album serializer."""

        model = models.Album
        fields = [
            'title',
            'photos',
        ]
        read_only_fields = ('photos',)


class PhotoSerializer(ModelSerializer):
    """Photo serializer."""

    class Meta:
        """Meta information for the album serializer."""

        model = models.Photo
        fields = [
            'title',
            'url',
            'album',
        ]
