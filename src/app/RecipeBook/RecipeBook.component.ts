import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
    selector:'RecipeBook',
    templateUrl:'./RecipeBook.component.html',
    styleUrls:[],
    providers: [RecipeService]
})
export class RecipeBookComponent implements OnInit {
    recipeListItem: Recipe;

    constructor(private recipeService:RecipeService) {

    }

    ngOnInit(){
        this.recipeService.recipeSelected
            .subscribe(
                (recipe:Recipe) => {
                    this.recipeListItem = recipe;
                }
            );
    }
}