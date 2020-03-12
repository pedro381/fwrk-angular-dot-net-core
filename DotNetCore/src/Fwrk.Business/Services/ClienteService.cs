using System;
using System.Linq;
using System.Threading.Tasks;
using Fwrk.Business.Intefaces;
using Fwrk.Business.Models;
using Fwrk.Business.Models.Validations;

namespace Fwrk.Business.Services
{
    public class ClienteService : BaseService, IClienteService
    {
        private readonly IClienteRepository _clienteRepository;
        private readonly IEnderecoRepository _enderecoRepository;

        public ClienteService(IClienteRepository clienteRepository,
                                 IEnderecoRepository enderecoRepository,
                                 INotificador notificador) : base(notificador)
        {
            _clienteRepository = clienteRepository;
            _enderecoRepository = enderecoRepository;
        }

        public async Task<bool> Adicionar(Cliente cliente)
        {
            if (!ExecutarValidacao(new ClienteValidation(), cliente)) return false;
            await _clienteRepository.Adicionar(cliente);
            return true;
        }

        public async Task<bool> Atualizar(Cliente cliente)
        {
            if (!ExecutarValidacao(new ClienteValidation(), cliente)) return false;

            var enderecos = await _enderecoRepository.ObterEnderecoPorCliente(cliente.Id);
            
            if (enderecos != null)
            {
                var enderecosToRemove =
                    enderecos.Where(e => cliente.Enderecos.All(c => c.Id != e.Id));

                foreach (var endereco in enderecosToRemove)
                {
                    await _enderecoRepository.Remover(endereco.Id);
                }
            }

            await _clienteRepository.Atualizar(cliente);
            return true;
        }

        public async Task AtualizarEndereco(Endereco endereco)
        {
            if (!ExecutarValidacao(new EnderecoValidation(), endereco)) return;

            await _enderecoRepository.Atualizar(endereco);
        }

        public async Task<bool> Remover(Guid id)
        {
            var enderecos = await _enderecoRepository.ObterEnderecoPorCliente(id);

            if (enderecos != null)
            {
                foreach (var endereco in enderecos)
                {
                    await _enderecoRepository.Remover(endereco.Id);
                }
            }

            await _clienteRepository.Remover(id);
            return true;
        }

        public void Dispose()
        {
            _clienteRepository?.Dispose();
            _enderecoRepository?.Dispose();
        }
    }
}