using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Fwrk.Business.Models;

namespace Fwrk.Business.Intefaces
{
    public interface IEnderecoRepository : IRepository<Endereco>
    {
        Task<IEnumerable<Endereco>> ObterEnderecoPorCliente(Guid clienteId);
    }
}