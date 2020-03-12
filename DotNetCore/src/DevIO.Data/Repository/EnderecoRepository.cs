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