import { Endereco } from './endereco';

export class EnderecoValidation {
    constructor(){
        this.cep = true;
        this.rua = true;
        this.numero = true;
        this.bairro = true;    
        this.cidade = true;  
        this.uf = true;  
    }
    cep: boolean;
    rua: boolean;
    numero: boolean;
    bairro: boolean;
    cidade: boolean;
    uf: boolean;
    
    isValid(endereco: Endereco):boolean  {
        this.cep = endereco.cep ? true : false;
        this.rua = endereco.rua ? true : false;
        this.numero = endereco.numero ? true : false;
        this.bairro = endereco.bairro ? true : false;
        this.cidade = endereco.cidade ? true : false;
        this.uf = endereco.uf ? true : false;
        
        return this.cep && 
        this.rua && 
        this.numero && 
        this.bairro && 
        this.cidade && 
        this.uf ;
    };
}