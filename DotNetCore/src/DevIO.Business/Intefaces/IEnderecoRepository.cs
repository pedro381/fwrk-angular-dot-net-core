using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using DevIO.Business.Models;

namespace DevIO.Business.Intefaces
{
    public interface IEnderecoRepository : IRepository<Endereco>
    {
        Task<IEnumerable<Endereco>> ObterEnderecoPorCliente(Guid clienteId);
    }
}