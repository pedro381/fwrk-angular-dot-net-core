import { Component, OnInit } from '@angular/core';
import { FiltroCliente } from './models/filtro-cliente';
import { Cliente } from './models/cliente';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ClienteService } from './services/cliente.service';

@Component({
  selector: 'app-cliente-listar',
  templateUrl: './listar.component.html',
  styles: []
})
export class ListarClienteComponent implements OnInit {
  clientes: Cliente[];
  filtro: FiltroCliente;

  estadoCivilList = [];
  selectedItems = [];
  ddlEstadoCivilConfig: IDropdownSettings = {};

  constructor(private clienteService: ClienteService) {
    this.filtro = new FiltroCliente();
    this.clientes = this.clienteService.clientes;    
    this.estadoCivilList = this.clienteService.estadoCivilList;
  }

  ngOnInit() {

    this.ddlEstadoCivilConfig = {
      singleSelection: false,
      idField: 'id',
      textField: 'descricao',
      selectAllText: 'Todos',
      unSelectAllText: 'Nenhum',
      itemsShowLimit: 5,
      searchPlaceholderText: 'Buscar',
      allowSearchFilter: true
    };

  }

  PesquisarCliente() {
    this.filtro.estadoCivil = this.selectedItems.map(e => e.item_id); 
    console.log(this.filtro);


    this.clientes = this.clienteService.clientes.filter(c => c.nome == this.filtro.nome);
    
  }

}


