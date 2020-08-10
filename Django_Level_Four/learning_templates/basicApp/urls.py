from django.conf.urls import url
from basicApp import views


#Template tagging

app_name = 'basicApp'

urlpatterns = [
    url(r'^relative/$', views.relative, name='relative'),
    url(r'^other/$', views.other, name='other'),
]