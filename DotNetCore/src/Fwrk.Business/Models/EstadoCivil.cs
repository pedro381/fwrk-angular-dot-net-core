using System.Collections.Generic;

namespace Fwrk.Business.Models
{
    public class EstadoCivil : Entity
    {
        public string Descricao { get; set; }
        public IEnumerable<Cliente> Clientes { get; set; }
    }
}