export interface PurchaseOrder {
    poId?: number;
    poNumber?: number;
    poCode?: string;
    poDate: string;
  
    importerId: number;
    importerName?: string;
    impAddress?: string;
    impGSTIN?: string;
  
    consigneeId: number;
    consigneeName?: string;
    consigneeAddress?: string;
    consigneeGSTIN?: string;
  
    deliveryNote?: string;
    modeTermsofPayment?: string;
    destination?: string;
    dispatchedThrough?: string;
  
    createdBy?: string;
    createdByName?: string;
    createdAt?: string;
    updatedAt?: string;
    updatedBy?: string;
  
    items: PurchaseOrderItem[];
  }
  
  export interface PurchaseOrderItem {
    poItemId?: number;
    poId?: number;
  
    productName: string;
    hsnCode?: string;
    quantity: number;
    unit?: string;
    rate: number;
  }
  export interface PurchaseOrderSearch {
    poNumber?: string;
    importer?: string;
    consignee?: string;
    createdBy?: string;
    dateFrom?: string; // Or Date, depending on your backend expectation
    dateTo?: string;
  }
  