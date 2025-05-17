export interface PurchaseOrder {
  poId: number;
  poNumber: number;
  poCode: string;
  poDate: string;
  importerId: number;
  impAddress: string;
  impGSTIN: string;
  consigneeId: number;
  consigneeAddress: string;
  consigneeGSTIN: string;
  deliveryNote: string;
  modeTermsofPayment: string;
  destination: string;
  dispatchedThrough: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  updatedBy: string;
  items?: PurchaseOrderItem[]; // ✅ Add this
}

export interface PurchaseOrderItem {
  itemId: number;
  poId: number;
  productId: number;
  productName: string;
  quantity: number;
  rate: number;
  amount: number;
}
