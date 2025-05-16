namespace AIEApi.Models
{
    using System;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("Import")]
    public class Import
    {
        public int Id { get; set; }

        [Column("OrgId")]
        public int OrganizationId { get; set; }

        public string InvoiceNumber { get; set; }

        public DateTime InvoiceDate { get; set; }

        public string Importer { get; set; }

        public string ImporterAddress { get; set; }

        public string Consignee { get; set; }

        public string ConsigneeAddress { get; set; }

        public string? LogoPath { get; set; }

        public string CreatedBy { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }

        public string? UpdatedBy { get; set; }

    }

}
