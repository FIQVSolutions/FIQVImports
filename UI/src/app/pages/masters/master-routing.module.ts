import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImportersComponent } from '../masters/importers/importers.component';
import { StatesComponent } from './states/states.component';
import { CountryComponent } from './country/country.component';
import { CitiesComponent } from './cities/cities.component';
import { ConsigneesComponent } from './consignees/consignees.component';
import { AdminComponent } from 'src/app/theme/layout/admin/admin.component';
import { GuestComponent } from 'src/app/theme/layout/guest/guest.component';

const routes: Routes = [
  {
    path: '',
    component: GuestComponent,
    children: [
      { path: '', redirectTo: 'importers', pathMatch: 'full' },
      { path: 'importers', component: ImportersComponent },
      { path: 'states', component: StatesComponent },
      { path: 'countries', component: CountryComponent },
      { path: 'cities', component: CitiesComponent },
      { path: 'consignees', component: ConsigneesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule {}
