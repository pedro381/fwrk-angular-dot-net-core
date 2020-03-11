import { Component, OnInit, Input, Output } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Cliente } from '../models/cliente';
import { ClienteService } from '../services/cliente.service';
import { EstadoCivil } from '../models/EstadoCivil';
import { Endereco } from 'src/app/endereco/models/endereco';
import { UUID } from 'angular2-uuid';
import { ClienteValidation } from '../models/cliente-validate';



@Component({
  selector: 'cliente-formulario',
  templateUrl: './cliente-formulario.component.html',
  styles: []
})
export class FormularioClienteComponent implements OnInit {
  @Input()
  cliente: Cliente;
  @Input()
  @Output()
  clienteValidation: ClienteValidation;

  dt: Date;

  estadoCivilList = [];
  estadoCivilSelecionado: EstadoCivil[];
  ddlEstadoCivilConfig: IDropdownSettings = {};

  constructor(private clienteService: ClienteService) { 
    this.estadoCivilList = this.clienteService.estadoCivilList;

    this.ddlEstadoCivilConfig = {
      singleSelection: true,
      idField: 'id',
      textField: 'descricao',
      itemsShowLimit: 5,
      searchPlaceholderText: 'Buscar',
      allowSearchFilter: true
    };

  }

  ngOnInit() {
    if(this.cliente.estadoCivil){
      this.estadoCivilSelecionado = [this.cliente.estadoCivil];
    }

    this.dt = this.cliente.nascimento;
  }
  
  onItemSelect(item: any) {
    this.clienteValidation.estadoCivil =  true;
    this.cliente.estadoCivil = item;
  }

  onItemDeSelect(item: any) {
    this.clienteValidation.estadoCivil =  false;
    this.cliente.estadoCivil = null;
  }

  mudarStatus(){
    this.cliente.ativo = !this.cliente.ativo;
  }

  adicionarEndereco(){
    let endereco: Endereco = new Endereco();;
    if(this.cliente.enderecos){      
      endereco.index = UUID.UUID();
      this.cliente.enderecos.push(endereco);
    }else{
      this.cliente.enderecos = [endereco];
    }
  }

  excluirEndereco(endereco: Endereco){
    this.cliente.enderecos
    .splice(
      this.cliente.enderecos
      .findIndex(e => e.id && e.id === endereco.id || e.index && e.index === endereco.index)
    ,1);
  }
}
