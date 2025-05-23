﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AIEApi.Models
{
    public class PurchaseOrder
    {
        [Key]
        public int POId { get; set; }
        public int PONumber { get; set; }
        public string POCode { get; set; }
        public DateTime PODate { get; set; }

        public int ImporterId { get; set; }
        [ForeignKey("ImporterId")]
        public Importer? Importer { get; set; }
        public string? ImpAddress { get; set; }
        public string? ImpGSTIN { get; set; }

        public int ConsigneeId { get; set; }
        [ForeignKey("ConsigneeId")]
        public Consignee? Consignee { get; set; }
        public string? ConsigneeAddress { get; set; }
        public string? ConsigneeGSTIN { get; set; }

        public string? DeliveryNote { get; set; }
        public string? ModeTermsofPayment { get; set; }
        public string? Destination { get; set; }
        public string? DispatchedThrough { get; set; }

        public int? CreatedBy { get; set; }

        [ForeignKey("CreatedBy")]
        public User? CreatedUser { get; set; }
        public DateTime? CreatedAt { get; set; } = DateTime.Now;
        public DateTime? UpdatedAt { get; set; }
        public int? UpdatedBy { get; set; }

        //public ICollection<Invoice> Invoices { get; set; }
        //public ICollection<PurchaseOrderItem> Items { get; set; }
    }

    public class PurchaseOrderDto
    {
        public int POId { get; set; }
        public int PONumber { get; set; }
        public string POCode { get; set; }
        public DateTime PODate { get; set; }

        public int ImporterId { get; set; }
        public string? ImporterName { get; set; }

        public int ConsigneeId { get; set; }
        public string? ConsigneeName { get; set; }

        public int? CreatedBy { get; set; }
        public string? CreatedByName { get; set; }

        public DateTime? CreatedAt { get; set; }
    }


}
