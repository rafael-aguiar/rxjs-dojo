import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Stock } from '../models/stocks';

@Component({
  selector: 'app-stocks-card',
  templateUrl: './stocks-card.component.html',
  styleUrls: ['./stocks-card.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class StocksCardComponent implements OnInit {
  @Input() stock: Stock;

  constructor() {}

  ngOnInit(): void {}
}
