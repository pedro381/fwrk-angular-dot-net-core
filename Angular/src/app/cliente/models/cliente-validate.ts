import { Cliente } from './cliente';

export class ClienteValidation {
    constructor(){
        this.nome = true;
        this.nascimento = true;
        this.estadoCivil = true;
        this.nomeMae = true;    
    }
    nome: boolean;
    nascimento: boolean;
    estadoCivil: boolean;
    nomeMae: boolean;

    isValid(cliente: Cliente):boolean  {
        this.nome = cliente.nome ? true : false;
        this.nascimento = cliente.nascimento ? true : false;
        this.estadoCivil = cliente.estadoCivil ? true : false;
        this.nomeMae = cliente.nomeMae ? true : false;
        let validEndereco = true;
        if(cliente.enderecos && cliente.enderecos.length > 0){
            cliente.enderecos.forEach(ev => {
                if(!ev.enderecoValidation.isValid(ev)){
                    validEndereco = false;
                }
            });
        }else{
            validEndereco = false;
        }

        return this.nome && this.nascimento && this.estadoCivil && this.nomeMae && validEndereco;
    };
}