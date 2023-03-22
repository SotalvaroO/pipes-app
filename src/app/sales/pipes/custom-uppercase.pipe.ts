import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customUppercase',
})
export class CustomUpperCasePipe implements PipeTransform {
  transform(value: string, isUpper: boolean = true) {
    return isUpper ? value.toUpperCase() : value.toLowerCase();
  }
}
