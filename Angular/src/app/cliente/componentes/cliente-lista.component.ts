import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styles: []
})
export class ListaClienteComponent implements OnInit {
  @Input()
  clientes: Cliente[];

  constructor() { }

  ngOnInit() {
  }

  mudarStatus(cliente: Cliente){
    cliente.ativo = !cliente.ativo;
  }

  excluirCliente(id: number){
    
  }
}
