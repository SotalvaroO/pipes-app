import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/sale.interface';

@Pipe({
  name: 'customSort',
})
export class CustomSortPipe implements PipeTransform {
  transform(heroes: Hero[], sortBy: string = 'no value') {
    if (sortBy === 'name') {
      return heroes.sort((a, b) => (a.name > b.name ? 1 : -1));
    }
    if (sortBy === 'flight') {
      return heroes.sort((a, b) => (a.flight < b.flight ? 1 : -1));
    }
    if (sortBy === 'color') {
      return heroes.sort((a, b) => (a.color > b.color ? 1 : -1));
    }
    return heroes;
  }
}
