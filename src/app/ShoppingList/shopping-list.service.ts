import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients = [
        // new Ingredient('Apples',5),
        // new Ingredient('Tomatoes',10)
    ];

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredientFromRecipe(ingredients: Ingredient[]){
        this.ingredients = [...this.ingredients, ...ingredients];
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}