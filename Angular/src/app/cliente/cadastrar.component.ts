import { Component, OnInit } from '@angular/core';
import { Cliente } from './models/cliente';
import { ClienteService } from './services/cliente.service';
import { Router } from '@angular/router';
import { ClienteValidation } from './models/cliente-validate';

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
      let ids: number[] = this.clienteService.clientes.map(function(o) { return o.id; });
      this.cliente.id =  Math.max(...ids) + 1; 
      this.clienteService.adicionar(this.cliente);

      // fazer comunicacao com backend

      this.router.navigate(['/clientes']);
      //this.router.navigateByUrl('/clientes');
    }
  }

}
