namespace AIEApi.Models
{
    using System;

    public class Organization
    {
        public int Id { get; set; }

        public string OrganizationName { get; set; }

        public string OrgAddress { get; set; }

        public DateTime CreatedAt { get; set; }

        public string CreatedBy { get; set; }

        public DateTime UpdatedAt { get; set; }

        public string UpdatedBy { get; set; }

        // Optional: Navigation property for related Imports
        public List<Import> Imports { get; set; }
    }

}
