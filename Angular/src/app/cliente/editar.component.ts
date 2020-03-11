import { Component, OnInit } from '@angular/core';
import { Cliente } from './models/cliente';
import { ClienteService } from './services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteValidation } from './models/cliente-validate';

@Component({
  selector: 'app-cliente-editar',
  templateUrl: './editar.component.html',
  styles: []
})
export class EditarClienteComponent implements OnInit {
  cliente: Cliente;
  clienteValidation: ClienteValidation = new ClienteValidation();
  
  constructor(
    private route: ActivatedRoute, 
    private clienteService: ClienteService,
    private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.cliente = this.clienteService.obterPorId(params['id']);
      });
  }

  salvar(){
    let valid = this.clienteValidation.isValid(this.cliente);
    if(valid){
      // fazer comunicacao com backend

      this.router.navigate(['/clientes']);
      //this.router.navigateByUrl('/clientes');
    }
  }

}
