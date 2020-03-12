import { Component, OnInit } from '@angular/core';
import { Cliente } from './models/cliente';
import { ClienteService } from './services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteValidation } from './models/cliente-validate';
import { EstadoCivil } from './models/EstadoCivil';

@Component({
  selector: 'app-cliente-editar',
  templateUrl: './editar.component.html',
  styles: []
})
export class EditarClienteComponent implements OnInit {
  cliente: Cliente;
  clienteValidation: ClienteValidation = new ClienteValidation();
  estadoCivilSelecionado: EstadoCivil[];
  
  constructor(
    private route: ActivatedRoute, 
    private clienteService: ClienteService,
    private router: Router) { 
      this.cliente = new Cliente;
      this.route.params
        .subscribe(params => {
          this.clienteService.obterPorId(params['id'])
            .then(
              data => {
                this.cliente =  this.clienteService.mapperServerCliente(data);                
                if(this.cliente.estadoCivil){
                  this.estadoCivilSelecionado = [this.cliente.estadoCivil];
                }
              },
              err => {
                console.log(err);
              }
            );
        });
    }

  ngOnInit() {
  }

  salvar(){
    let valid = this.clienteValidation.isValid(this.cliente);
    if(valid){
      this.clienteService.atualizar(this.cliente)
      .subscribe(
        data => {
          this.router.navigate(['/clientes']);
        },
        err => {
          console.log(err);
        }
      );
    }
  }

}
