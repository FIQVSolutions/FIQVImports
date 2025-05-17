import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PurchaseOrder, PurchaseOrderItem } from 'src/models/purchase-order.model';
import { ImportOrderService } from 'src/services/import-order.service';
import { MasterDataService } from 'src/services/master-data.service';
@Component({
  selector: 'app-purchase-order',
  standalone: false,
  templateUrl: './purchase-order.component.html',
  styleUrl: './purchase-order.component.scss'
})
export class PurchaseOrderComponent {
  form = this.fb.group({
    poNumber: [0, Validators.required],
    poCode: [''],
    poDate: [new Date().toISOString().substring(0, 10), Validators.required],

    importerId: [null, Validators.required],
    consigneeId: [null, Validators.required],
    impAddress: [''],
    impGSTIN: [''],
    consigneeAddress: [''],
    consigneeGSTIN: [''],
    deliveryNote: [''],
    modeTermsofPayment: [''],
    destination: [''],
    dispatchedThrough: [''],
    items: this.fb.array([])
  });

  importers: any[] = [];
  consignees: any[] = [];

  constructor(
    private fb: FormBuilder,
    private poService: ImportOrderService,
    private masterDataService: MasterDataService
  ) {}

  ngOnInit() {
    this.masterDataService.getImporters(1).subscribe((data) => (this.importers = data));
    this.masterDataService.getConsignees(1).subscribe((data) => (this.consignees = data));
  }

  onSubmit() {
    if (this.form.valid) {
      // 1. Grab the raw form value
      const raw = this.form.getRawValue();

      // 2. Map into a strongly-typed PurchaseOrder
      const po: PurchaseOrder = {
        poNumber: raw.poNumber,
        poCode: raw.poCode,
        poDate: raw.poDate,
        importerId: raw.importerId,
        impAddress: raw.impAddress,
        impGSTIN: raw.impGSTIN,
        consigneeId: raw.consigneeId,
        consigneeAddress: raw.consigneeAddress,
        consigneeGSTIN: raw.consigneeGSTIN,
        deliveryNote: raw.deliveryNote,
        modeTermsofPayment: raw.modeTermsofPayment,
        destination: raw.destination,
        dispatchedThrough: raw.dispatchedThrough,
        // 3. Here’s the key: map each item into a PurchaseOrderItem
        items: raw.items.map((i: any) => ({
          itemId: 0, // or remove if not needed
          productId: 0, // optional placeholder
          poItemId: i.poItemId,
          poId: i.poId,
          productName: i.productName,
          hsnCode: i.hsnCode,
          quantity: i.quantity,
          unit: i.unit,
          rate: i.rate,
          amount: i.quantity * i.rate // derived here
        })),
        poId: 0,
        createdBy: '1',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        updatedBy: '1'
      };

      // 4. Call the service
      this.poService.createPurchaseOrder(po).subscribe({
        next: () => {
          alert('Purchase Order Created Successfully');
          this.form.reset();
          this.items.clear();
        },
        error: (err) => {
          console.error('Error creating PO:', err);
          alert('Failed to create Purchase Order');
        }
      });
    } else {
      this.form.markAllAsTouched();
      alert('Please fill all required fields.');
    }
  }

  get items(): FormArray {
    return this.form.get('items') as FormArray;
  }
  addItem(): void {
    const itemGroup = this.fb.group({
      poItemId: [0],
      poId: [0],
      productName: ['', Validators.required],
      hsnCode: [''],
      quantity: [1, [Validators.required, Validators.min(1)]],
      unit: [''],
      rate: [0, [Validators.required, Validators.min(0)]],
      amount: [{ value: 0, disabled: true }]
    });

    itemGroup.get('quantity')!.valueChanges.subscribe(() => this.updateAmount(itemGroup));
    itemGroup.get('rate')!.valueChanges.subscribe(() => this.updateAmount(itemGroup));

    this.items.push(itemGroup);
  }

  removeItem(index: number): void {
    this.items.removeAt(index);
  }

  updateAmount(itemGroup: FormGroup): void {
    const quantity = itemGroup.get('quantity')!.value || 0;
    const rate = itemGroup.get('rate')!.value || 0;
    const amount = quantity * rate;
    itemGroup.get('amount')!.setValue(amount, { emitEvent: false });
  }
}
