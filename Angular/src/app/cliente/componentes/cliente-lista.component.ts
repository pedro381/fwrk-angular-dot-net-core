import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Cliente } from '../models/cliente';
import { ClienteService } from '../services/cliente.service';
import Swal from 'sweetalert2';

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

  swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  });
  

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
  }

  mudarStatus(id: string){ 
      
    this.swalWithBootstrapButtons.fire({
      title: 'Alterar Status?',
      text: "Esta ação irá modificar o status!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Alterar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {        
        this.clienteService.mudarStatus(id)
        .subscribe(
          data => {
            this.pesquisar.emit();            
            this.swalWithBootstrapButtons.fire(
              'Status Alterado!',
              'O status foi modificado.',
              'success'
            )
          },
          err => {
            console.log(err);
          }
        ); 
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        this.swalWithBootstrapButtons.fire(
          'Cancelado',
          'O status não foi alterado :)',
          'error'
        )
      }
    })
  }

  excluirCliente(id: string){    
      
    this.swalWithBootstrapButtons.fire({
      title: 'Deletar Cadastro?',
      text: "O cadastro será deletado!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Deletar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        
        this.clienteService.excluir(id)
        .subscribe(
          data => {            
            this.swalWithBootstrapButtons.fire(
              'Deletado!',
              'O cadastro foi deletado.',
              'success'
            )
            this.pesquisar.emit();
          },
          err => {
            console.log(err);
          }
        ); 
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        this.swalWithBootstrapButtons.fire(
          'Cancelado',
          'O cadastro não foi deletado :)',
          'error'
        )
      }
    })
  }
}
