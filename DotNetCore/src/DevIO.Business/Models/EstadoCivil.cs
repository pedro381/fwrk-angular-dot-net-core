using System.Collections.Generic;

namespace DevIO.Business.Models
{
    public class EstadoCivil : Entity
    {
        public string Descricao { get; set; }
        public IEnumerable<Cliente> Clientes { get; set; }
    }
}