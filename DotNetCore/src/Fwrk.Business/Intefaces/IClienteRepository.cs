using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Fwrk.Business.Models;

namespace Fwrk.Business.Intefaces
{
    public interface IClienteRepository : IRepository<Cliente>
    {
        Task<Cliente> ObterClienteEndereco(Guid id);
        Task<Cliente> ObterClienteEstadoCivilsEndereco(Guid id);
        Task<IEnumerable<Cliente>> ObterClientePorEstadoCivilNome(Guid[] estadoCivilId, string nome);
        Task MudarStatus(Guid id);
    }
}