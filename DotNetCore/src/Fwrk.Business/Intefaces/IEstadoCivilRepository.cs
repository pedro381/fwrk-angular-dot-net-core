using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Fwrk.Business.Models;

namespace Fwrk.Business.Intefaces
{
    public interface IEstadoCivilRepository : IRepository<EstadoCivil>
    {
        Task<IEnumerable<EstadoCivil>> ObterEstadoCivilsPorCliente(Guid clienteId);
        Task<IEnumerable<EstadoCivil>> ObterEstadoCivilsClientes();
        Task<EstadoCivil> ObterEstadoCivilCliente(Guid id);
    }
}