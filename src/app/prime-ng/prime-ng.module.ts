import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

// No hace falta importar el common module porque no se van a usar pipes
@NgModule({
	declarations: [],
	exports: [ ButtonModule, CardModule, MenubarModule],
    imports: []
})
export class PrimeNgModule {}
