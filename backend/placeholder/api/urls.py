"""URL to view mapping for the backend."""

from rest_framework.routers import SimpleRouter

from placeholder.api import views

r = SimpleRouter(trailing_slash=False)

r.register(r'users', views.UserViewSet, 'user')
r.register(r'posts', views.PostViewSet, 'post')
r.register(r'comments', views.CommentViewSet, 'comment')
r.register(r'albums', views.AlbumViewSet, 'album')
r.register(r'photos', views.PhotoViewSet, 'photo')

urlpatterns = r.urls
