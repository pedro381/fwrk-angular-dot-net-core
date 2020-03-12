using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Fwrk.Business.Intefaces;
using Fwrk.Business.Models;
using Fwrk.Data.Context;
using Microsoft.EntityFrameworkCore;

namespace Fwrk.Data.Repository
{
    public class EnderecoRepository : Repository<Endereco>, IEnderecoRepository
    {
        public EnderecoRepository(MeuDbContext context) : base(context) { }

        public async Task<IEnumerable<Endereco>> ObterEnderecoPorCliente(Guid clienteId)
        {
            return await Db.Enderecos.AsNoTracking()
                .Where(f => f.ClienteId == clienteId)
                .ToListAsync();
        }
    }
}