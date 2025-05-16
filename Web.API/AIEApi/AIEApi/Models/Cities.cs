using System.ComponentModel.DataAnnotations;

namespace AIEApi.Models
{
    public class Cities
    {
        [Key]
        public int CityId { get; set; }
        public string? CityName { get; set; }
        public string? CityCode { get; set; }
    }
}
