import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../ShoppingList/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() singleRecipe:Recipe;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addIngredientsToShopList(ingredients: Ingredient[]){
    console.log(ingredients);
    this.shoppingListService.addIngredientFromRecipe(ingredients);
  }

}
