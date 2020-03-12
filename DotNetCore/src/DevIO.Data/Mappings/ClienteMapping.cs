using DevIO.Business.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DevIO.Data.Mappings
{
    public class ClienteMapping : IEntityTypeConfiguration<Cliente>
    {
        public void Configure(EntityTypeBuilder<Cliente> builder)
        {
            builder.HasKey(p => p.Id);

            builder.Property(p => p.Nome)
                .IsRequired()
                .HasColumnType("varchar(200)");

            builder.Property(p => p.DataNascimento)
                .IsRequired();

            builder.Property(p => p.NomeMae)
                .IsRequired()
                .HasColumnType("varchar(200)");

            builder.Property(p => p.Ativo)
                .IsRequired();
            
            // 1 : N => Cliente : Enderecos
            builder.HasMany(f => f.Enderecos)
                .WithOne(p => p.Cliente)
                .HasForeignKey(p => p.ClienteId);

            builder.ToTable("Clientes");
        }
    }
}