import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Endereco } from '../models/endereco';
import { EnderecoService } from '../services/endereco.service';
import { EnderecoValidation } from '../models/endereco-validate';

@Component({
  selector: 'endereco-formulario',
  templateUrl: './endereco-formulario.component.html',
  styles: []
})
export class EnderecoFormularioComponent implements OnInit {
  @Output()
  @Input()
  endereco: Endereco;
  
  @Output()
  excluir: EventEmitter<any> = new EventEmitter();
  
  constructor(private enderecoService: EnderecoService) {     
  }

  ngOnInit() {
    this.endereco.enderecoValidation = new EnderecoValidation();
    console.log(this.endereco);
  }

  obterPorCep(){
    if(this.endereco.cep){
      this.enderecoService
      .obterPorCep(this.endereco.cep)
      .subscribe(
        data => {
          this.endereco.rua = data.logradouro;
          this.endereco.complemento = data.complemento;
          this.endereco.bairro = data.bairro;
          this.endereco.cidade = data.localidade;
          this.endereco.uf = data.uf;
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  excluirEndereco(){
      this.excluir.emit(this.endereco);
  }  

}
