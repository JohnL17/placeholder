"""Viewsets for the backend."""

from rest_framework_json_api.views import ModelViewSet

from placeholder.api import models, serializers


class UserViewSet(ModelViewSet):
    """User view set."""

    serializer_class = serializers.UserSerializer

    def get_queryset(self):
        """Queryset of the user.

        :return: The user
        :rtype: QuerySet
        """
        user = self.request.user
        return models.User.objects.filter(id=user.id)


class PostViewSet(ModelViewSet):
    """Post view set."""

    serializer_class = serializers.PostSerializer

    def get_queryset(self):
        """Queryset of the posts.

        :return: The posts
        :rtype: QuerySet
        """
        return models.Post.objects.all()


class CommentViewSet(ModelViewSet):
    """Comment view set."""

    serializer_class = serializers.CommentSerializer

    def get_queryset(self):
        """Queryset of the comments.

        :return: The comments
        :rtype: QuerySet
        """
        return models.Comment.objects.all()


class AlbumViewSet(ModelViewSet):
    """Album view set."""

    serializer_class = serializers.AlbumSerializer

    def get_queryset(self):
        """Queryset of the albums.

        :return: The albums
        :rtype: QuerySet
        """
        return models.Album.objects.all()


class PhotoViewSet(ModelViewSet):
    """Photo view set."""

    serializer_class = serializers.PhotoSerializer

    def get_queryset(self):
        """Queryset of the photos.

        :return: The photos
        :rtype: QuerySet
        """
        return models.Photo.objects.all()
