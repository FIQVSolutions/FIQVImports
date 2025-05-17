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
import { MasterRoutingModule } from './master-routing.module';

@NgModule({
  declarations: [ImportersComponent, StatesComponent, CountryComponent, CitiesComponent, ConsigneesComponent, ProductsComponent],
  imports: [
    CommonModule,
    MasterRoutingModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ]
})
export class MasterModule {}
