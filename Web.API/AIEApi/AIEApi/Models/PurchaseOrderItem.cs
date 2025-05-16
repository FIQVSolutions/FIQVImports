using System.ComponentModel.DataAnnotations;

namespace AIEApi.Models
{
    public class PurchaseOrderItem
    {
        [Key]
        public int POItemId { get; set; }
        public int POId { get; set; }

        public string ProductName { get; set; }
        public string HSNCode { get; set; }
        public decimal Quantity { get; set; }
        public string Unit { get; set; }
        public decimal Rate { get; set; }

        public decimal Amount => Quantity * Rate;

        public PurchaseOrder PurchaseOrder { get; set; }
    }

}
