import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Recepie } from '../../recepie.model';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.scss']
})
export class RecepieItemComponent implements OnInit {

  @Input() recipe?: Recepie;

  @Output() recipeSelected = new EventEmitter<void>();

  onSelected(){
    this.recipeSelected.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
