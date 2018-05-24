import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';


export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Chicken fajitas',
        'this is an awesome tasty dish for those on a diet',
        'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=800&h=650&auto=compress&cs=tinysrgb',
        [
            new Ingredient('chicken',1),
            new Ingredient('Rice',150),
            new Ingredient('Mixed Peppers',5)
        ]),
        new Recipe('Almond Caramel Pancakes',
        'Need I say more?',
        'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?w=800&h=650&auto=compress&cs=tinysrgb',
        [
            new Ingredient('Flour',3),
            new Ingredient('Almonds', 10),
            new Ingredient('Water',1),
            new Ingredient('Mix Berries', 15)
        ])
      ];

      getRecipes(){
          return this.recipes.slice();
      }
}