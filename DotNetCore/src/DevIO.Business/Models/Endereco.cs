using System;

namespace DevIO.Business.Models
{
    public class Endereco : Entity
    {
        public string Cep { get; set; }
        public string Rua { get; set; }
        public string Numero { get; set; }
        public string Complemento { get; set; }
        public string Bairro { get; set; }
        public string Cidade { get; set; }
        public string Uf { get; set; }
        public Guid ClienteId { get; set; }
        public Cliente Cliente { get; set; }
    }
}