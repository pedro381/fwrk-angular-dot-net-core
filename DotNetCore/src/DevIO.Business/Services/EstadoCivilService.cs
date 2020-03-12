﻿using System;
using System.Threading.Tasks;
using DevIO.Business.Intefaces;
using DevIO.Business.Models;
using DevIO.Business.Models.Validations;

namespace DevIO.Business.Services
{
    public class EstadoCivilService : BaseService, IEstadoCivilService
    {
        private readonly IEstadoCivilRepository _estadoCivilRepository;

        public EstadoCivilService(IEstadoCivilRepository estadoCivilRepository,
                              INotificador notificador) : base(notificador)
        {
            _estadoCivilRepository = estadoCivilRepository;
        }

        public async Task Adicionar(EstadoCivil estadoCivil)
        {
            if (!ExecutarValidacao(new EstadoCivilValidation(), estadoCivil)) return;

            await _estadoCivilRepository.Adicionar(estadoCivil);
        }

        public async Task Atualizar(EstadoCivil estadoCivil)
        {
            if (!ExecutarValidacao(new EstadoCivilValidation(), estadoCivil)) return;

            await _estadoCivilRepository.Atualizar(estadoCivil);
        }

        public async Task Remover(Guid id)
        {
            await _estadoCivilRepository.Remover(id);
        }

        public void Dispose()
        {
            _estadoCivilRepository?.Dispose();
        }
    }
}