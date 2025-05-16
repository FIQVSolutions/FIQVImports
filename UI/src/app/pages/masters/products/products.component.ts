import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'] // ✅ Corrected key: was `styleUrl`
})
export class ProductsComponent {
  products = [
    { name: 'iPhone 15', category: 'Electronics', stock: 20 },
    { name: 'USB Cable', category: 'Accessories', stock: 100 },
  ];

  columnsToDisplay = ['name', 'category', 'stock', 'actions'];

  addProduct() {
    console.log('Add Product');
  }

  editProduct(product: any) {
    console.log('Edit', product);
  }

  deleteProduct(product: any) {
    this.products = this.products.filter(p => p !== product);
  }
}
