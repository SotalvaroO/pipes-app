import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  public example: string = "hola mundo";
  //Moment js alternativa para fechas mejor
  public exampleDate: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
