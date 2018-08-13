import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';


export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe('Chicken fajitas',
            'this is an awesome tasty dish for those on a diet',
            'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=800&h=650&auto=compress&cs=tinysrgb',
            [
                new Ingredient('chicken', 1),
                new Ingredient('Rice', 150),
                new Ingredient('Mixed Peppers', 5)
            ]),
        new Recipe('Almond Caramel Pancakes',
            'Need I say more?',
            'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?w=800&h=650&auto=compress&cs=tinysrgb',
            [
                new Ingredient('Flour', 3),
                new Ingredient('Almonds', 10),
                new Ingredient('Water', 1),
                new Ingredient('Mix Berries', 15)
            ])
    ];

    setRecipes(recipes: Array<Recipe>) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}
