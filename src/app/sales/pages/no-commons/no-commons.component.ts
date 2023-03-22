import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styles: [],
})
export class NoCommonsComponent implements OnInit {
  public name: string = 'Santiago';
  public gender: string = 'masc';
  public mappingInvitation = {
    masc: 'invitarlo',
    fem: 'invitarla',
  };

  public customers: string[] = ['Cale', 'Cristo', 'Gallo', 'Porky'];
  public customerMap = {
    '=0': 'No tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperando.',
  };

  public person = {
    name: 'santiago',
    age: 22,
    address: 'colombia',
  };

  public heroes = [
    this.person,
    this.person,
    this.person,
    this.person,
    this.person,
  ];

  public customObservable = interval(1000);

  public promiseValue = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('data de promesa successful')
    }, 3500);
  });

  constructor() {}

  ngOnInit(): void {}

  public changeName(): void {
    if (this.name == 'Santiago') {
      this.name = 'Carla';
      this.gender = 'fem';
      return;
    }
    this.name = 'Santiago';
    this.gender = 'masc';
  }
  public addToQueue(): void {
    this.customers.pop();
  }
}
