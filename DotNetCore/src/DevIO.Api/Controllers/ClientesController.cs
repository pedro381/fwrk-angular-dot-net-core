using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using DevIO.Api.ViewModels;
using DevIO.Business.Intefaces;
using DevIO.Business.Models;
using Microsoft.AspNetCore.Mvc;

namespace DevIO.Api.Controllers
{
    [Route("api/clientes")]
    public class ClientesController : MainController
    {
        private readonly IClienteRepository _clienteRepository;
        private readonly IClienteService _clienteService;
        private readonly IMapper _mapper;

        public ClientesController(IClienteRepository clienteRepository, 
                                      IMapper mapper, 
                                      IClienteService clienteService,
                                      INotificador notificador) : base(notificador)
        {
            _clienteRepository = clienteRepository;
            _mapper = mapper;
            _clienteService = clienteService;
        }

        [HttpGet("obter-todos/")]
        public async Task<IEnumerable<ClienteViewModel>> ObterTodos()
        {
            return _mapper.Map<IEnumerable<ClienteViewModel>>(await _clienteRepository.ObterTodos());
        }

        [HttpGet("obter-cliente-por-cstado-civil-nome/")]
        public async Task<IEnumerable<ClienteViewModel>> ObterClientePorEstadoCivilNome([FromQuery(Name = "estadoCivilId")]Guid[] estadoCivilId, string nome)
        {
            return _mapper.Map<IEnumerable<ClienteViewModel>>(await _clienteRepository.ObterClientePorEstadoCivilNome(estadoCivilId, nome));
        }

        [HttpGet("obter-cliente-por-id/{id:guid}")]
        public async Task<ActionResult<ClienteViewModel>> ObterPorId(Guid id)
        {
            var cliente = await ObterClienteEstadoCivilsEndereco(id);

            if (cliente == null) return NotFound();

            return cliente;
        }

        [HttpPost("adicionar/")]
        public async Task<ActionResult<ClienteViewModel>> Adicionar(ClienteViewModel clienteViewModel)
        {
            if (!ModelState.IsValid) return CustomResponse(ModelState);

            var c = _mapper.Map<Cliente>(clienteViewModel);
            
            await _clienteService.Adicionar(c);

            return CustomResponse(clienteViewModel);
        }

        [HttpPut("atualizar/{id:guid}")]
        public async Task<ActionResult<ClienteViewModel>> Atualizar(Guid id, ClienteViewModel clienteViewModel)
        {
            clienteViewModel.Id = id;

            if (!ModelState.IsValid) return CustomResponse(ModelState);

            await _clienteService.Atualizar(_mapper.Map<Cliente>(clienteViewModel));

            return CustomResponse(clienteViewModel);
        }

        [HttpDelete("excluir/{id:guid}")]
        public async Task<ActionResult<ClienteViewModel>> Excluir(Guid id)
        {
            var clienteViewModel = await ObterClienteEndereco(id);

            if (clienteViewModel == null) return NotFound();

            await _clienteService.Remover(id);

            return CustomResponse(clienteViewModel);
        }

        [HttpGet("mudar-status/{id:guid}")]
        public async Task MudarStatus(Guid id)
        {
            await _clienteRepository.MudarStatus(id);
        }

        public async Task<ClienteViewModel> ObterClienteEstadoCivilsEndereco(Guid id)
        {
            return _mapper.Map<ClienteViewModel>(await _clienteRepository.ObterClienteEstadoCivilsEndereco(id));
        }

        public async Task<ClienteViewModel> ObterClienteEndereco(Guid id)
        {
            return _mapper.Map<ClienteViewModel>(await _clienteRepository.ObterClienteEndereco(id));
        }
    }
}