using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DevIO.Business.Intefaces;
using DevIO.Business.Models;
using DevIO.Data.Context;
using Microsoft.EntityFrameworkCore;

namespace DevIO.Data.Repository
{
    public class ClienteRepository : Repository<Cliente>, IClienteRepository
    {
        public ClienteRepository(MeuDbContext context) : base(context)
        {
        }

        public async Task MudarStatus(Guid id)
        {
            var cliente = Db.Clientes.Find(id);
            cliente.Ativo = !cliente.Ativo;
            Db.Clientes.Update(cliente);
            await SaveChanges(); 
        }

        public async Task<Cliente> ObterClienteEndereco(Guid id)
        {
            return await Db.Clientes.AsNoTracking()
                .Include(c => c.Enderecos)
                .FirstOrDefaultAsync(c => c.Id == id);
        }

        public async Task<Cliente> ObterClienteEstadoCivilsEndereco(Guid id)
        {
            return await Db.Clientes.AsNoTracking()
                .Include(c => c.EstadoCivil)
                .Include(c => c.Enderecos)
                .FirstOrDefaultAsync(c => c.Id == id);
        }

        public async Task<IEnumerable<Cliente>> ObterClientePorEstadoCivilNome(Guid[] estadoCivilId, string nome)
        {
            return await Db.Clientes.AsNoTracking()
                .Include(c => c.EstadoCivil)
                .Where(c =>
                    (estadoCivilId == null || !estadoCivilId.Any() || estadoCivilId.Contains(c.EstadoCivilId))
                    && (string.IsNullOrEmpty(nome) || c.Nome.Contains(nome)))
                .ToListAsync();
        }
    }
}