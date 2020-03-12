using System.Collections.Generic;
using Fwrk.Business.Notificacoes;

namespace Fwrk.Business.Intefaces
{
    public interface INotificador
    {
        bool TemNotificacao();
        List<Notificacao> ObterNotificacoes();
        void Handle(Notificacao notificacao);
    }
}