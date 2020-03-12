using Fwrk.Business.Intefaces;
using Fwrk.Business.Notificacoes;
using Fwrk.Business.Services;
using Fwrk.Data.Context;
using Fwrk.Data.Repository;
using Microsoft.Extensions.DependencyInjection;

namespace Fwrk.Api.Configuration
{
    public static class DependencyInjectionConfig
    {
        public static IServiceCollection ResolveDependencies(this IServiceCollection services)
        {
            services.AddScoped<MeuDbContext>();
            services.AddScoped<IEstadoCivilRepository, EstadoCivilRepository>();
            services.AddScoped<IClienteRepository, ClienteRepository>();
            services.AddScoped<IEnderecoRepository, EnderecoRepository>();

            services.AddScoped<INotificador, Notificador>();
            services.AddScoped<IClienteService, ClienteService>();
            services.AddScoped<IEstadoCivilService, EstadoCivilService>();

            return services;
        }
    }
}