using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Fwrk.Api.ViewModels;
using Fwrk.Business.Intefaces;
using Microsoft.AspNetCore.Mvc;

namespace Fwrk.Api.Controllers
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
            var lst = await _estadoCivilRepository.ObterTodos();
            return _mapper.Map<IEnumerable<EstadoCivilViewModel>>(lst.OrderBy(x => x.Descricao));
        }
    }
}
