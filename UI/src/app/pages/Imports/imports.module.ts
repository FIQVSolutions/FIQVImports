import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { ImportsRoutingModule } from './imports.routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; // for native JS Date
import { ReactiveFormsModule } from '@angular/forms';
import { PurchaseOrderListComponent } from './purchase-order-list/purchase-order-list.component';

@NgModule({
  declarations: [PurchaseOrderListComponent, PurchaseOrderComponent],
  imports: [
    CommonModule,
    ImportsRoutingModule, // ✅ use child routing here
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ]
})
export class ImportsModule {}
