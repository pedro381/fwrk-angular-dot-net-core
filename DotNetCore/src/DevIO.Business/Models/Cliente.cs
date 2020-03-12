using System;
using System.Collections.Generic;

namespace DevIO.Business.Models
{
    public class Cliente : Entity
    {
        public string Nome { get; set; }
        public DateTime DataNascimento { get; set; }
        public string NomeMae { get; set; }
        public bool Ativo { get; set; }
        public Guid EstadoCivilId { get; set; }
        public EstadoCivil EstadoCivil { get; set; }
        public IEnumerable<Endereco> Enderecos { get; set; }
    }
}