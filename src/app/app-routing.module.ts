import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"
import { RecipeBookComponent } from "./RecipeBook/RecipeBook.component";
import { ShoppingListComponent } from "./ShoppingList/shoppingList/shoppingList.component";
import { RecipeStartComponent } from "./RecipeBook/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "./RecipeBook/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./RecipeBook/recipe-edit/recipe-edit.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {
        path: 'recipes', component: RecipeBookComponent, children: [
            { path: '', component: RecipeStartComponent },
            { path: 'new', component: RecipeEditComponent },
            { path: ':id', component: RecipeDetailComponent },
            { path: ':id/edit', component: RecipeEditComponent }
        ]
    },
    { path: 'shopping-list', component: ShoppingListComponent }
];


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}