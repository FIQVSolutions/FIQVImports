using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AIEApi.Models
{
    public class State
    {
        [Key]
        [Column("StatesId")]
        public int StateId { get; set; }
        [Column("StatesName")]
        public string? StateName { get; set; }
        [Column("StatesCode")]
        public string? StateCode { get; set; }
    }
}
