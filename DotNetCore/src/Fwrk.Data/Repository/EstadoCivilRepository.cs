﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Fwrk.Business.Intefaces;
using Fwrk.Business.Models;
using Fwrk.Data.Context;
using Microsoft.EntityFrameworkCore;

namespace Fwrk.Data.Repository
{
    public class EstadoCivilRepository : Repository<EstadoCivil>, IEstadoCivilRepository
    {
        public EstadoCivilRepository(MeuDbContext context) : base(context) { }

        public async Task<EstadoCivil> ObterEstadoCivilCliente(Guid id)
        {
            return await Db.EstadoCivils.AsNoTracking().Include(f => f.Clientes)
                .FirstOrDefaultAsync(p => p.Id == id);
        }

        public async Task<IEnumerable<EstadoCivil>> ObterEstadoCivilsClientes()
        {
            return await Db.EstadoCivils.AsNoTracking().Include(f => f.Clientes)
                .OrderBy(p => p.Descricao).ToListAsync();
        }

        public async Task<IEnumerable<EstadoCivil>> ObterEstadoCivilsPorCliente(Guid clienteId)
        {
            return await Buscar(p => p.Clientes.Any(c => c.Id == clienteId));
        }
    }
}