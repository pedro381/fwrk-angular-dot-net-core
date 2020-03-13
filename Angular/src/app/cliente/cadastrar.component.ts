import { Component, OnInit } from '@angular/core';
import { Cliente } from './models/cliente';
import { ClienteService } from './services/cliente.service';
import { Router } from '@angular/router';
import { ClienteValidation } from './models/cliente-validate';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente-cadastrar',
  templateUrl: './cadastrar.component.html',
  styles: []
})
export class CadastrarClienteComponent implements OnInit {
  cliente: Cliente;
  clienteValidation: ClienteValidation = new ClienteValidation();

  constructor(
    private clienteService: ClienteService,
    private router: Router) {
      this.cliente = new Cliente();
     }

  ngOnInit() {
  }

  salvar(){
    
    let valid = this.clienteValidation.isValid(this.cliente);
    if(valid){
      this.clienteService.adicionar(this.cliente)
      .subscribe(
        data => {
          Swal.fire({
            title: 'Cadastro Salvo!',
            text: "O cadastro foi realizado com sucesso!",
            icon: 'success',
            showCancelButton: false,
            confirmButtonText: 'OK'
          }).then((result) => {            
            this.router.navigate(['/clientes']);
          })
        },
        err => {
          console.log(err);
        }
      );
    }
    else if(!this.cliente.enderecos || this.cliente.enderecos.length < 0){
      Swal.fire(
        'Endereço não informado!',
        'Inclua pelo menos um endereço!',
        'error'
      );
    }
    else{
      Swal.fire(
        'Cadastro inválido!',
        'Verifique os campos obrigatórios!',
        'error'
      );
    }
  }

}
