import { Injectable, Output, EventEmitter } from '@angular/core';

import { Recipe } from "./recipe.model";
import { Ingredient } from '../shared/model/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({providedIn: 'root'})
export class RecipeService {

    selectedRecipe = new EventEmitter<Recipe>(); 

    recipes: Recipe[] = [
        new Recipe(
            'Costela Suina', 
            'Deliciosa costela suína.', 
            'https://s3.amazonaws.com/institucional-statics-files/site/uploads/18_Ribs-on-the-Barbie.png',
            [
                new Ingredient('Costela Suína', 1),
                new Ingredient('Barbecue', 100)
            ]),
        new Recipe(
            'Pizza Portugues', 
            'Pizza no sabor portugues.', 
            'https://img.itdg.com.br/tdg/images/recipes/000/161/765/121858/121858_original.jpg',
            [
                new Ingredient('Massa', 1),
                new Ingredient('Ovo', 1),
                new Ingredient('Presunto', 300),
                new Ingredient('Queijo', 300),
                new Ingredient('Ervilha', 50)
            ])
    ];

    constructor(private shoppingListService: ShoppingListService) { }

    getRecipes(): Recipe[] {
        return this.recipes.slice();
    }

    sendIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

}
