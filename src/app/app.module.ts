import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RecipeItemComponent } from './RecipeBook/recipe-item/recipe-item.component';
import { RecipeListComponent } from './RecipeBook/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './RecipeBook/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './ShoppingList/shoppingList/shoppingList.component';
import { ShoppingListEditComponent } from './ShoppingList/shopping-list-edit/shopping-list-edit.component';
import { HeaderComponent } from './Header/header.component';
import { RecipeBookComponent } from './RecipeBook/RecipeBook.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './ShoppingList/shopping-list.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    HeaderComponent,
    RecipeBookComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
