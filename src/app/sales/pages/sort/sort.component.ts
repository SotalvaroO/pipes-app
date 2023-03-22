import { Type } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Color, Hero } from '../../interfaces/sale.interface';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styles: [],
})
export class SortComponent implements OnInit {
  public sortType = '';

  public heroes: Hero[] = [
    {
      name: 'super man',
      flight: true,
      color: Color.blue,
    },
    {
      name: 'batman',
      flight: false,
      color: Color.black,
    },
  ];

  public changeSort(value: string) {
    this.sortType = value;
    console.log(value);
  }

  constructor() {}

  ngOnInit(): void {}
}
