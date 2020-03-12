import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Cliente } from '../models/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styles: []
})
export class ListaClienteComponent implements OnInit {
  @Input()
  clientes: Cliente[];
  
  @Output()
  pesquisar: EventEmitter<any> = new EventEmitter();

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
  }

  mudarStatus(id: string){ 
    this.clienteService.mudarStatus(id)
    .subscribe(
      data => {
        this.pesquisar.emit();
      },
      err => {
        console.log(err);
      }
    ); 
  }

  excluirCliente(id: string){    
    this.clienteService.excluir(id)
    .subscribe(
      data => {
        this.pesquisar.emit();
      },
      err => {
        console.log(err);
      }
    ); 
  }
}
