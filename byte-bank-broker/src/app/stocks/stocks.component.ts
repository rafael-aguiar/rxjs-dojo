import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Stocks, StocksAPI } from './models/stocks';
import { StocksService } from './stocks.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css'],
})
export class StocksComponent implements OnInit {
  stocksInput = new FormControl();
  stocks: Stocks;

  constructor(private stocksService: StocksService) {}

  ngOnInit() {
    this.stocksService.getStocks().subscribe((data) => {
      this.stocks = data.payload;
      console.log(this.stocks);
    });
  }
}
