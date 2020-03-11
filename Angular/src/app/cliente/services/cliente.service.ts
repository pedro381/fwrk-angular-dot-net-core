import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { EstadoCivil } from '../models/EstadoCivil';

@Injectable()
export class ClienteService {

    clientes: Cliente[];
    estadoCivilList: EstadoCivil[]

    constructor() {
      
    this.estadoCivilList = [
      { id: 1, descricao: 'Solteiro(a)' },
      { id: 2, descricao: 'Casado(a)' },
      { id: 3, descricao: 'Divorciado(a)' },
      { id: 4, descricao: 'Viúvo(a)' },
      { id: 5, descricao: 'Separado(a)' }
    ];

        this.clientes = [{
            id: 1,
            nome: 'Teste',
            nascimento: new Date(1995, 2-1, 6),
            estadoCivil: {id:2 , descricao:"Casado(a)"},
            nomeMae: 'Teste',
            ativo: true,
            enderecos: [ {id: 1, rua: "Mundo Velho", numero: "226", complemento: "Casa", bairro: "Centro", cidade: "Sabará", uf: "MG", cep:  "30570500", index: '', enderecoValidation: null},
                         {id: 2, rua: "Mundo Velho", numero: "226a", complemento: "Casa", bairro: "Centro", cidade: "Sabará", uf: "MG", cep:  "30570500", index: '', enderecoValidation: null}]
          },
          {
            id: 2,
            nome: 'Teste2',
            nascimento: new Date(1995, 2-1, 6),
            estadoCivil: {id:2 , descricao:"Casado(a)"},
            nomeMae: 'Teste2',
            ativo: true,
            enderecos: [ {id: 1, rua: "Mundo Velho", numero: "226", complemento: "Casa", bairro: "Centro", cidade: "Sabará", uf: "MG", cep:  "30570500", index: '', enderecoValidation: null}]
          },
          {
            id: 3,
            nome: 'Teste3',
            nascimento: new Date(1995, 2-1, 6),
            estadoCivil:  {id:2 , descricao:"Casado(a)"},
            nomeMae: 'Teste3',
            ativo: true,
            enderecos: [ {id: 1, rua: "Mundo Velho", numero: "226", complemento: "Casa", bairro: "Centro", cidade: "Sabará", uf: "MG", cep:  "30570500", index: '', enderecoValidation: null}]
          }];        
    }

    obterTodos(estado: string): Cliente[] {
    
      if (estado === 'ativos') {
        return this.clientes.filter(cliente => cliente.ativo);
      }
  
      return this.clientes;
    }
    
    obterPorId(id: number): Cliente {
        return this.clientes.find(cliente => cliente.id == id);
    }

    adicionar(cliente: Cliente){
      console.log(cliente);
      this.clientes.push(cliente);
    }
}