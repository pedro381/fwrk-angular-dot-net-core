using AutoMapper;
using Fwrk.Api.ViewModels;
using Fwrk.Business.Models;

namespace Fwrk.Api.Configuration
{
    public class AutomapperConfig : Profile
    {
        public AutomapperConfig()
        {
            CreateMap<Cliente, ClienteViewModel>().ReverseMap();
            CreateMap<Endereco, EnderecoViewModel>().ReverseMap();
            CreateMap<EstadoCivilViewModel, EstadoCivil>();
            
            //CreateMap<EstadoCivil, EstadoCivilViewModel>()
            //    .ForMember(dest => dest.NomeCliente, 
            //        opt => opt.MapFrom(src => src.Cliente.Nome));
        }
    }
}