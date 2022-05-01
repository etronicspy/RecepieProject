import { Component, Input, OnInit } from '@angular/core';
import { Recepie } from '../recepie.model';

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.scss']
})
export class RecepieDetailComponent implements OnInit {
  @Input() recipe?: Recepie;

  constructor() { }

  ngOnInit(): void {
  }

}
