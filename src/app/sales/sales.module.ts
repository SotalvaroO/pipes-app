import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommonsComponent } from './pages/no-commons/no-commons.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { SortComponent } from './pages/sort/sort.component';
import { CustomUpperCasePipe } from './pipes/custom-uppercase.pipe';
import { CustomBooleanPipe } from './pipes/custom-boolean.pipe';
import { CustomSortPipe } from './pipes/custom-sort.pipe';

@NgModule({
  declarations: [
    NumbersComponent,
    NoCommonsComponent,
    BasicsComponent,
    SortComponent,
    CustomUpperCasePipe,
    CustomBooleanPipe,
    CustomSortPipe,
  ],
  imports: [CommonModule, PrimeNgModule],
  exports: [
    NumbersComponent,
    NoCommonsComponent,
    BasicsComponent,
    SortComponent,
  ],
})
export class SalesModule {}
