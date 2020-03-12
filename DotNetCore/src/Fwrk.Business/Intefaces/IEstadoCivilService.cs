using System;
using System.Threading.Tasks;
using Fwrk.Business.Models;

namespace Fwrk.Business.Intefaces
{
    public interface IEstadoCivilService : IDisposable
    {
        Task Adicionar(EstadoCivil estadoCivil);
        Task Atualizar(EstadoCivil estadoCivil);
        Task Remover(Guid id);
    }
}