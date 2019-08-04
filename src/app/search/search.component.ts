import { Component, OnInit } from '@angular/core';
import { Stocks } from '../stocks';
import { STOCKS } from '../stocks-data';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private stocks: Stocks[] = STOCKS;
  constructor() { }

  ngOnInit() {
  }

}
