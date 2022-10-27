from django.urls import path, include
from django.views.generic import TemplateView

from rest_framework.schemas import get_schema_view

from .views import get_categories, get_recipe_for_category, get_recipe


urlpatterns = [
    path('categories/', get_categories),
    path('category/<str:category>/', get_recipe_for_category),
    path('recipe/<int:recipe_id>/', get_recipe),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('openapi/', get_schema_view(
            title="Recipes",
            description="API for all things recipes"
        ), name='openapi-schema'),
    path('swagger-ui/', TemplateView.as_view(
            template_name='swagger-ui.html',
            extra_context={'schema_url': 'openapi-schema'}
        ), name='swagger-ui'),
]
