import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/model/ingredient.model';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {

    ingredientsChanged = new EventEmitter<Ingredient[]>();

    ingredients: Ingredient[] = [
        new Ingredient('Costela Suína', 1),
        new Ingredient('Molho barbecue', 100),
        new Ingredient('Batata Frita', 1)
    ];

    getIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient): void {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.getIngredients());
    }

    addIngredients(ingredients: Ingredient[]): void {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.getIngredients());
    }

}