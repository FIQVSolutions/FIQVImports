namespace AIEApi.Models
{
    using System;

    public class User
    {
        public int UserId { get; set; }

        public string UserName { get; set; }

        public string Address { get; set; }

        public DateTime CreatedAt { get; set; }

        public string CreatedBy { get; set; }

        public DateTime UpdatedAt { get; set; }

        public string UpdatedBy { get; set; }
    }

}
