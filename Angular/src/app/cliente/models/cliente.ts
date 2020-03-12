import { EstadoCivil } from './EstadoCivil';
import { Endereco } from 'src/app/endereco/models/endereco';

export class Cliente {
    id: string;
    nome: string;
    nascimento: Date;
    estadoCivil: EstadoCivil;
    nomeMae: string;
    ativo: boolean;
    enderecos: Endereco[];
}