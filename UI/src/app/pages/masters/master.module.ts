import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ImportersComponent } from './importers/importers.component';
import { StatesComponent } from './states/states.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatHeaderCellDef, MatCellDef, MatHeaderRowDef, MatRowDef } from '@angular/material/table';
import { provideHttpClient } from '@angular/common/http';
import { CountryComponent } from './country/country.component';
import { CitiesComponent } from './cities/cities.component';
import { ConsigneesComponent } from './consignees/consignees.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '',
    component: ImportersComponent
  },{
    path: 'states',
    component: StatesComponent
  },{
    path: 'countries',
    component: CountryComponent
  },
  {
    path: 'cities',
    component: CitiesComponent
  },
  {
    path: 'consignees',
    component: ConsigneesComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  }
];

@NgModule({
  declarations: [ImportersComponent, StatesComponent, CountryComponent, CitiesComponent, ConsigneesComponent, ProductsComponent],
  providers: [provideHttpClient()],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ]
})
export class MasterModule { }
