from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import RecipeModel
from .serializers import RecipeSerializer


@api_view(['GET'])
def get_recipe(_, recipe_id):
    """
    Recipe object from id

    :param _: request parameter

    :param recipe_id: recipe ID

    :return: Recipe object
    """
    recipe = RecipeModel.objects.get(pk=recipe_id)
    serializer = RecipeSerializer(recipe)
    return Response(serializer.data, status=200)

@api_view(['GET'])
def get_categories(_):
    """
    List of categories in response
    :param _: request parameter
    :return: List of categories [('F', 'Первые блюда'),
                                ('S', 'Вторые блюда'),
                                ('A', 'Закуски'),
                                ('L', 'Салаты'),
                                ('C', 'Кремы')]
    """

    result = RecipeModel.get_categories()
    return Response(result, status=200)

@api_view(['GET'])
def get_recipe_for_category(_, category):
    """
    list of recipes for category
    :param _: request parameter
    :param category: Category value one of ['F', 'S', 'A', 'L', 'C']
    :return:list of recipes
    """

    recipes = RecipeModel.objects.filter(category=category)
    serializer = RecipeSerializer(recipes, many=True)
    return Response(serializer.data, status=200)
