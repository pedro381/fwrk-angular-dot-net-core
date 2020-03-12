import { EnderecoValidation } from './endereco-validate';

export class Endereco {
    id: string;
    rua: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    uf: string;
    cep: string;
    index: string;
    enderecoValidation: EnderecoValidation;
}