import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recepie } from '../recepie.model';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.scss']
})
export class RecepieListComponent implements OnInit {
  
  @Output() recipeWasSelected = new EventEmitter<Recepie>();

  onRecipeSelected(recipe?: Recepie){
    this.recipeWasSelected.emit(recipe); 
  }

  recepies: Recepie[] = [
    new Recepie('Alu Gauranga', 'The best potato recipe', 'https://chef.tm/public/pics/174/174704_0.jpg'),
    new Recepie('Kachori', 'The best grain recipe', 'https://craftlog.com/m/i/9490864=s1280=h960')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
