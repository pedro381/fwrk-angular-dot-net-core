using Empresa.Application.Interfaces;
using Empresa.Application.Services;
using Empresa.Domain.Interfaces;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace Empresa.Test
{
    public class EmpresaServiceTest
    {
        private readonly IEmpresaService empresaService;
        private readonly Mock<IEmpresaRepository> empresaRepositoryMock;

        public EmpresaServiceTest()
        {
            empresaRepositoryMock = new Mock<IEmpresaRepository>();
            empresaService = new EmpresaService(empresaRepositoryMock.Object);
        }

        [Fact]
        [Trait(nameof(IEmpresaService.Find), "Success")]
        public async Task GetEmpresaById_Success()
        {
            var expected = new Empresa.Domain.Entities.Empresa
            {
                EmpresaId = Guid.NewGuid()
            };

            empresaRepositoryMock
                .Setup(m => m.Find(expected.EmpresaId))
                .ReturnsAsync(expected);

            var customer = await empresaService.Find(expected.EmpresaId);

            var actual = customer;

            Assert.Equal(expected, actual);
        }

        [Fact]
        [Trait(nameof(IEmpresaService.GetEmpresaFiltered), "Success")]
        public async Task GetCustomer_Success()
        {
            var expected = new List<Empresa.Domain.Entities.Empresa>()
            {
                new Empresa.Domain.Entities.Empresa()
                {
                    EmpresaId = Guid.NewGuid(),
                    TipoEmpresa = "Barack Obama",
                    Nome = "67323320747",
                    Cnpj = "134 Wooster Street, Soho Nova Iorque",
                    Cep = "31556656",
                    Logradouro = "Rua Guajajaras",
                    Bairro = "Centro",
                    Cidade = "Belo Horizonte",
                    Email = "ioasys@ioasys.com",
                    Numero = 1,
                    Telefone = "",
                    DataAtualizacao = null,
                    DataCriacao = DateTime.Now
                }
            };

            empresaRepositoryMock
                .Setup(m => m.GetEmpresaFiltered(It.IsAny<Empresa.Domain.Entities.Empresa>()))
                .ReturnsAsync(expected);

            var customers = await empresaService.GetEmpresaFiltered(new Empresa.Domain.Entities.Empresa()
            {
                EmpresaId = Guid.NewGuid(),
                TipoEmpresa = "Barack Obama",
                Nome = "67323320747",
                Cnpj = "134 Wooster Street, Soho Nova Iorque",
                Cep = "31556656",
                Logradouro = "Rua Guajajaras",
                Bairro = "Centro",
                Cidade = "Belo Horizonte",
                Email = "ioasys@ioasys.com",
                Numero = 1,
                Telefone = "",
                DataAtualizacao = null,
                DataCriacao = DateTime.Now
            });

            var expectedSingle = expected.Single();

            Assert.Contains(customers, f =>
                            f.EmpresaId == expectedSingle.EmpresaId &&
                            f.Nome == expectedSingle.Nome &&
                            f.Cnpj == expectedSingle.Cnpj &&
                            f.Logradouro == expectedSingle.Logradouro);
        }
    }
}
