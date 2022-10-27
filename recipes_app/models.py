from django.db import models
from django.contrib.postgres.fields import ArrayField, HStoreField, hstore

class RecipeModel(models.Model):
    CATEGORY_CHOICES = [
        ('F', 'Первые блюда'),
        ('S', 'Вторые блюда'),
        ('A', 'Закуски'),
        ('L', 'Салаты'),
        ('C', 'Кремы')
    ]
    name = models.CharField(max_length=100, help_text="Name of the dish")
    ingredients = ArrayField(base_field=models.CharField(max_length=60), help_text="Array from ingredients of dish")
    preparation = models.TextField(help_text="Description of cooking")
    category = models.CharField(max_length=1, choices=CATEGORY_CHOICES, help_text=f"Category of dish: {CATEGORY_CHOICES}")
    preview = models.ImageField(upload_to='preview/', blank=True, help_text="preview of dish")

    def __str__(self):
        return f'id: {self.id}; name: {self.name}, category: {self.category}.'

    @classmethod
    def get_categories(self):
        return self.CATEGORY_CHOICES