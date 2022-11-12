import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent implements OnInit {
  public items: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
      },
      {
        label: 'Ventas',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Eliminar', icon: 'pi pi-fw pi-trash' },
          { label: 'Refrescar', icon: 'pi pi-fw pi-refresh' },
        ],
      },
    ];
  }
}
