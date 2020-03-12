using System;
using System.Threading.Tasks;
using DevIO.Business.Models;

namespace DevIO.Business.Intefaces
{
    public interface IEstadoCivilService : IDisposable
    {
        Task Adicionar(EstadoCivil estadoCivil);
        Task Atualizar(EstadoCivil estadoCivil);
        Task Remover(Guid id);
    }
}