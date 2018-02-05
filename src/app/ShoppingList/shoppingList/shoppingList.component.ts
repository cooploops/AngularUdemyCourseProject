import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
    selector:'shoppingList',
    templateUrl:'./shoppingList.component.html',
    styleUrls:['./shoppingList.component.css']
})

export class ShoppingListComponent implements OnInit {
    ingredients: Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Tomatoes',10)
    ];

    constructor(){

    }
    ngOnInit(){
        
    }
}