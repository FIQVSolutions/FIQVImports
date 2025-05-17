import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { AdminComponent } from 'src/app/theme/layout/admin/admin.component';
import { PurchaseOrderListComponent } from './purchase-order-list/purchase-order-list.component';
import { GuestComponent } from 'src/app/theme/layout/guest/guest.component';

const routes: Routes = [
  {
    path: '',
    component: GuestComponent,
    children: [
      { path: '', redirectTo: 'purchase-order-list', pathMatch: 'full' },
      { path: 'purchase-order-list', component: PurchaseOrderListComponent },
      { path: 'purchase-order', component: PurchaseOrderComponent } // /imports/purchase-order
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportsRoutingModule {}
