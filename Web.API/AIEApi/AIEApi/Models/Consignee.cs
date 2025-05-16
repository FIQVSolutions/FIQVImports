using System;

namespace AIEApi.Models
{
    public class Consignee
    {
        public int ConsigneeId { get; set; }
        public string Name { get; set; }
        public string GstNo { get; set; }
        public string Address { get; set; }
        public DateTime CreatedAt { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public string? UpdatedBy { get; set; }
    }

}
