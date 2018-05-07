from django.conf.urls import include, url
from djoser.views import ActivationView, UserCreateView
from django.contrib import admin
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token
from djoser.views import UserView

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(
        r'^api/v1/auth/registration',
        UserCreateView.as_view(),
        name='placeholder-register'
    ),
    url(
        r'^api/v1/auth/activate',
        ActivationView.as_view(),
        name='placeholder-activate'
    ),
    url(
        r'^api/v1/auth/me',
        UserView.as_view(),
        name='placeholder-me'
    ),
    url(r'^api/v1/auth/login', obtain_jwt_token, name='login'),
    url(r'^api/v1/auth/refresh', refresh_jwt_token, name='refresh'),
    url(r'^api/v1/', include('placeholder.api.urls')),
]
