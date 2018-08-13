import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { RecipeService } from '../RecipeBook/recipe.service';
import {Recipe} from '../RecipeBook/recipe.model';
import { map } from 'rxjs/operators';

@Injectable()
export class DataStorageService {
    constructor(private http: Http, private recipeService: RecipeService) { }

    storeRecipes() {
        return this.http.put('https://ng-recipe-book-d7242.firebaseio.com/recipes.json', this.recipeService.getRecipes());
    }

    getRecipes() {
        return this.http.get('https://ng-recipe-book-d7242.firebaseio.com/recipes.json')
            .pipe(map(
                (response: Response) => {
                    const recipes: Array<Recipe> = response.json();
                    for (const recipe of recipes) {
                        if (!recipe['ingredients']) {
                            console.log(recipe);
                            recipe['ingredients'] = [];
                        }
                    }
                    return recipes;
                }
            ))
            .subscribe(
                (recipes: Array<Recipe>) => {
                    this.recipeService.setRecipes(recipes);
                }
            );
    }
}
