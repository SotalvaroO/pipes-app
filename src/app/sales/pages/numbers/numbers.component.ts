import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styles: [
  ]
})
export class NumbersComponent implements OnInit {

  public netSales: number =2245345.546345;
  public percentage: number =0.48;

  constructor() { }

  ngOnInit(): void {
  }

}
