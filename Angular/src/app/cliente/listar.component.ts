import { Component, OnInit, AfterViewInit } from '@angular/core';
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
  clientes: Cliente[]= [];
  filtro: FiltroCliente;

  estadoCivilList = [];
  selectedItems = [];
  ddlEstadoCivilConfig: IDropdownSettings = {};

  constructor(private clienteService: ClienteService) {
    this.filtro = new FiltroCliente();   
    
    this.clienteService.ObterTodosEstadoCivil()
    .subscribe(
      data => {
        this.estadoCivilList = data;
        this.PesquisarCliente();
      },
      err => {
        console.log(err);
      }
    );
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
    this.filtro.estadoCivil = this.selectedItems.map(e => e.id);     
    this.clienteService.ObterClientePorEstadoCivilNome(this.filtro.estadoCivil,  this.filtro.nome)
    .subscribe(
      data => {
        this.clientes = this.clienteService.mapperServerClienteList(data);
      },
      err => {
        console.log(err);
      }
    );    
  }
}