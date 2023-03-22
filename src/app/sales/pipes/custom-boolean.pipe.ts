import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'customBoolean',
  })
  export class CustomBooleanPipe implements PipeTransform {

    transform(value: boolean) {
      return value ? "Si" : "No";
    }
  }