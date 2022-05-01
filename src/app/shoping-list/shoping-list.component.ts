import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.scss']
})
export class ShopingListComponent implements OnInit {
  ingredients:  Ingredient[]= [
    new Ingredient('Ginger', 2),
    new Ingredient('Apples', 5)    
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(newIngredient:Ingredient){
    this.ingredients.push(newIngredient);
  }

}
