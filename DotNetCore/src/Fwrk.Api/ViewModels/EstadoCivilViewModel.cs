using System;
using System.ComponentModel.DataAnnotations;

namespace Fwrk.Api.ViewModels
{
    public class EstadoCivilViewModel
    {
        [Key]
        public Guid Id { get; set; }
        public string Descricao { get; set; }
    }
}