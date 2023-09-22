from django.urls import path, include
from . import views


urlpatterns = [
    path('register/', views.RegisterView.as_view()),
    path('login/', views.LoginView.as_view()),
    path('logout/', views.LogoutView.as_view()),
    path('list_profiles', views.ListProfilesView.as_view()),
    path('user_data/<str:username>/', views.UserDetailView.as_view()),
]