using FluentValidation;

namespace DevIO.Business.Models.Validations
{
    public class EstadoCivilValidation : AbstractValidator<EstadoCivil>
    {
        public EstadoCivilValidation()
        {
            RuleFor(c => c.Descricao)
                .NotEmpty().WithMessage("O campo {PropertyName} precisa ser fornecido")
                .Length(2, 1000).WithMessage("O campo {PropertyName} precisa ter entre {MinLength} e {MaxLength} caracteres");
        }
    }
}