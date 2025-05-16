using System.ComponentModel.DataAnnotations.Schema;

namespace AIEApi.Models
{
    public class Invoice
    {
        public int InvoiceId { get; set; }
        public int InvoiceNumber { get; set; }
        [Column("Invoice")]
        public string? DisplayInvoice { get; set; }
        public DateTime InvoiceDate { get; set; }

        public int ImporterId { get; set; }
        public string ImpAddress { get; set; }
        public string ImpGSTIN { get; set; }

        public int ConsigneeId { get; set; }
        public string ConsigneeAddress { get; set; }
        public string ConsigneeGSTIN { get; set; }

        public string DeliveryNote { get; set; }
        public string ModeTermsofPayment { get; set; }
        public string Destination { get; set; }
        public string DispatchedThrough { get; set; }

        public byte[] Logo { get; set; }
        public byte[] Signature { get; set; }

        public string CreatedBy { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime? UpdatedAt { get; set; }
        public string UpdatedBy { get; set; }

        public int? POId { get; set; }
        public PurchaseOrder PurchaseOrder { get; set; }
        public ICollection<InvoiceItem> Items { get; set; }
    }

}
