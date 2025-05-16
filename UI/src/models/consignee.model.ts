export interface Consignee {
    consigneeId: number;
    name: string;
    email: string;
    address: string;
    gstNo: string;
    createdAt: Date;
    createdBy: string;
    updatedAt?: Date;
    updatedBy?: string;
  }
  