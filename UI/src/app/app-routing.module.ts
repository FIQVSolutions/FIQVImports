import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { StatesComponent } from './pages/masters/states/states.component';
import { CountryComponent } from './pages/masters/country/country.component';
import { CitiesComponent } from './pages/masters/cities/cities.component';
import { ConsigneesComponent } from './pages/masters/consignees/consignees.component';
import { ProductsComponent } from './pages/masters/products/products.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./demo/dashboard/default/default.component').then((c) => c.DefaultComponent)
      },
      {
        path: 'importers',
        loadChildren: () => import('../app/pages/masters/master.module').then(m => m.MasterModule)
      },
      { path: 'states', component: StatesComponent },
      { path: 'countries', component: CountryComponent },
      { path: 'cities', component: CitiesComponent },
      { path: 'consignees', component: ConsigneesComponent },
      { path: 'products', component: ProductsComponent },
      {
        path: 'typography',
        loadComponent: () => import('./demo/elements/typography/typography.component')
      },
      {
        path: 'color',
        loadComponent: () => import('./demo/elements/element-color/element-color.component')
      },
      {
        path: 'sample-page',
        loadComponent: () => import('./demo/other/sample-page/sample-page.component')
      }
    ]
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: '',
        redirectTo: '/login', // This also ensures the default route goes to login in the guest view
        pathMatch: 'full'
      },
      {
        path: 'login', // Path for the login page
        loadComponent: () => import('./demo/pages/authentication/login/login.component').then(c => c.LoginComponent )
      },
      {
        path: 'register', // Path for the register page
        loadComponent: () => import('./demo/pages/authentication/register/register.component').then(c => c.RegisterComponent)
      },{
        path: 'imports',
        loadChildren: () => import('../app/pages/Imports/imports.module').then(m => m.ImportsModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
