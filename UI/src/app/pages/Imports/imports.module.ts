import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ImportListComponent } from './import-list/import-list.component';


const routes: Routes = [
  {
    path: '',
    component: ImportListComponent
  }
];

@NgModule({
  declarations: [ImportListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ImportsModule { }
