using System;
using System.Threading.Tasks;
using Fwrk.Business.Intefaces;
using Fwrk.Data.Context;
using Fwrk.Data.Repository;
using Moq;
using Xunit;

namespace Fwrk.XUnitTest
{
    public class ClienteServiceTest
    {
        private readonly IClienteRepository _clienteService;
        private readonly Mock<IClienteRepository> _clienteRepositoryMock;
        private readonly Mock<MeuDbContext> _meuDbContext;
        

        public ClienteServiceTest(Mock<MeuDbContext> meuDbContext)
        {
            this._meuDbContext = meuDbContext;
            _clienteRepositoryMock = new Mock<IClienteRepository>();
            _clienteService = new ClienteRepository(_meuDbContext.Object);
        }

        [Fact]
        [Trait(nameof(IClienteRepository.ObterPorId), "Success")]
        public async Task GetClienteById_Success()
        {
            var expected = new Business.Models.Cliente
            {
                Id = Guid.NewGuid()
            };

            _clienteRepositoryMock
                .Setup(m => m.ObterPorId(expected.Id))
                .ReturnsAsync(expected);

            var customer = await _clienteService.ObterPorId(expected.Id);

            var actual = customer;

            Assert.Equal(expected, actual);
        }

    }
}
