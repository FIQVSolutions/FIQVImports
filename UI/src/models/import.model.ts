export interface Import {
    id: number;
    orgId: number;
    invoiceNumber: string;
    invoiceDate: string;
    importer: string;
    importerAddress: string;
    consignee: string;
    consigneeAddress: string;
    logoPath?: string;
    createdBy: string;
    updatedAt: string;
    updatedBy: string;
  }
  