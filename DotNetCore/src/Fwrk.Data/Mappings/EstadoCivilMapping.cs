using Fwrk.Business.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Fwrk.Data.Mappings
{
    public class EstadoCivilMapping : IEntityTypeConfiguration<EstadoCivil>
    {
        public void Configure(EntityTypeBuilder<EstadoCivil> builder)
        {
            builder.HasKey(p => p.Id);

            builder.Property(p => p.Descricao)
                .IsRequired()
                .HasColumnType("varchar(1000)");

            // 1 : N => Cliente : Enderecos
            builder.HasMany(f => f.Clientes)
                .WithOne(p => p.EstadoCivil)
                .HasForeignKey(p => p.EstadoCivilId);

            builder.ToTable("EstadoCivil");
        }
    }
}