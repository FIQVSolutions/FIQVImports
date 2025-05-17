import { Component, inject, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PurchaseOrder } from 'src/models/purchase-order.model';
import { ImportOrderService } from 'src/services/import-order.service';

@Component({
  selector: 'app-purchase-order-list',
  standalone: false,
  templateUrl: './purchase-order-list.component.html',
  styleUrl: './purchase-order-list.component.scss'
})
export class PurchaseOrderListComponent implements OnInit {
  purchaseOrders: PurchaseOrder[] = [];

  displayedColumns: string[] = ['poNumber', 'poDate', 'importerName', 'consigneeName', 'createdByName', 'createdAt', 'actions'];
  constructor(
    private importOrderDataService: ImportOrderService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.loadPurchaseOrders();
  }

  loadPurchaseOrders(): void {
    this.importOrderDataService.getPurchaseOrders().subscribe((data) => {
      this.purchaseOrders = data;
    });
  }
  addPurchaseOrder() {
    // Navigate to form or open dialog
    console.log('Add Purchase Order clicked');
    this.route.navigateByUrl('/imports/purchase-order');
  }
  editPO(po: PurchaseOrder): void {
    // TODO: Implement edit logic, possibly navigate to an edit page or open a dialog
    console.log('Edit PO:', po);
  }

  deletePO(po: PurchaseOrder): void {
    // TODO: Implement delete logic, possibly call a delete API method and refresh the list
    console.log('Delete PO:', po);
  }
}
