namespace AIEApi.Models
{
    public class InvoiceItem
    {
        public int InvoiceItemId { get; set; }
        public int InvoiceId { get; set; }

        public string ProductName { get; set; }
        public string HSNCode { get; set; }
        public decimal Quantity { get; set; }
        public string Unit { get; set; }
        public decimal Rate { get; set; }

        public decimal Amount => Quantity * Rate;

        public Invoice Invoice { get; set; }
    }

}
