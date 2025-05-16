using System.ComponentModel.DataAnnotations;

namespace AIEApi.Models
{
    public class Country
    {
        [Key]
        public int CountryId { get; set; }
        public string? CountryName { get; set; }
        public string? CountryCode { get; set; }
    }
}
