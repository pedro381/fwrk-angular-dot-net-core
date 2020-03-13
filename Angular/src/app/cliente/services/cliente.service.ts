import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { EstadoCivil } from '../models/EstadoCivil';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Endereco } from 'src/app/endereco/models/endereco';
import { EnderecoValidation } from 'src/app/endereco/models/endereco-validate';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class ClienteService {

    constructor(private httpClient: HttpClient) {
           
    }
    
    async obterPorId(id: string){
      if(id){
        let url = environment.urlBaseApi + "clientes/obter-cliente-por-id/" + id;
        return this.httpClient.get<any>(url).toPromise();
      }
    }

    
    ObterTodosEstadoCivil(): Observable<EstadoCivil[]> {
      let url = environment.urlBaseApi + "estadocivil/obter-todos/";
      return this.httpClient.get<EstadoCivil[]>(url);
    }

    ObterClientePorEstadoCivilNome(estadoCivilId: string[], nome: string): Observable<any> {
      let url = environment.urlBaseApi + "clientes/obter-cliente-por-cstado-civil-nome?nome=" + (nome ? nome : '');
      estadoCivilId.forEach(e => {
        url += "&estadoCivilId=" + e;
      });
      return this.httpClient.get<any>(url);
    }

    adicionar(cliente: Cliente): Observable<any> {    
      let url = environment.urlBaseApi + "clientes/adicionar/";
      return this.httpClient.post<Cliente>(url, this.mapperCliente(cliente));
    }

    atualizar(cliente: Cliente): Observable<any> {    
      let url = environment.urlBaseApi + "clientes/atualizar/" + cliente.id;
      return this.httpClient.put<Cliente>(url, this.mapperCliente(cliente));
    }

    excluir(id: string): Observable<any> {    
      let url = environment.urlBaseApi + "clientes/excluir/" + id;
      return this.httpClient.delete<any>(url);
    }

    mudarStatus(id: string): Observable<any> {    
      let url = environment.urlBaseApi + "clientes/mudar-status/" + id;
      return this.httpClient.get<any>(url);
    }

    mapperCliente(cliente: Cliente): any{
      let c = {
        "id": cliente.id,
        "nome": cliente.nome,
        "dataNascimento": cliente.nascimento,
        "nomeMae": cliente.nomeMae,
        "ativo": cliente.ativo,
        "estadoCivilId": cliente.estadoCivil.id,
        "enderecos": []
      }

      cliente.enderecos.forEach(e => {
        c.enderecos.push(
          {
            "id": e.id,
            "rua": e.rua,
            "numero": e.numero,
            "complemento": e.complemento,
            "bairro": e.bairro,
            "cep": e.cep,
            "cidade": e.cidade,
            "uf": e.uf,
          })        
      });

      return c;
    }
    
    mapperServerClienteList(cliente: any[]): Cliente[]{
      let lst:Cliente[]=[];
      cliente.forEach(e => {
        lst.push(this.mapperServerCliente(e));
      });
      return lst;
    }

    mapperServerCliente(cliente: any): Cliente{
      let c:Cliente = {
        "id": cliente.id,
        "nome": cliente.nome,
        "nascimento": cliente.dataNascimento,
        "nomeMae": cliente.nomeMae,
        "ativo": cliente.ativo,
        "estadoCivil": {
          "id":  cliente.estadoCivil.id,
          "descricao":  cliente.estadoCivil.descricao
        },
        "enderecos": []
      }

      cliente.enderecos.forEach(e => {
        let end: Endereco =  {
            "id": e.id,
            "rua": e.rua,
            "numero": e.numero,
            "complemento": e.complemento,
            "bairro": e.bairro,
            "cep": e.cep,
            "cidade": e.cidade,
            "uf": e.uf,  
            "index": null,
            "enderecoValidation": new EnderecoValidation()
          };
        c.enderecos.push(end);    
      });

      return c;
    }
}