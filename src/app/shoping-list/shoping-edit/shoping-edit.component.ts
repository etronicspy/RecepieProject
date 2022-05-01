import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.scss']
})
export class ShopingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef?:ElementRef;
  @ViewChild('amountInput') amountInputRef?:ElementRef;

  @Output() ingredientAdded=new EventEmitter<Ingredient>();

  onAddItem(){
    const ingName=this.nameInputRef?.nativeElement.value;
    const ingAmount=this.amountInputRef?.nativeElement.value;
    const newIngredient=new Ingredient(ingName,ingAmount);
    this.ingredientAdded?.emit(newIngredient);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
