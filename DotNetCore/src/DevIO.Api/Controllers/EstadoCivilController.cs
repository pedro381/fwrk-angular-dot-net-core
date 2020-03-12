﻿using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using DevIO.Api.ViewModels;
using DevIO.Business.Intefaces;
using Microsoft.AspNetCore.Mvc;

namespace DevIO.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EstadoCivilController : MainController
    {
        private readonly IEstadoCivilRepository _estadoCivilRepository;
        private readonly IMapper _mapper;

        public EstadoCivilController(IEstadoCivilRepository estadoCivilRepository,
            IMapper mapper,
            INotificador notificador) : base(notificador)
        {
            _estadoCivilRepository = estadoCivilRepository;
            _mapper = mapper;
        }

        [HttpGet("obter-todos/")]
        public async Task<IEnumerable<EstadoCivilViewModel>> ObterTodos()
        {
            return _mapper.Map<IEnumerable<EstadoCivilViewModel>>(await _estadoCivilRepository.ObterTodos());
        }
    }
}
