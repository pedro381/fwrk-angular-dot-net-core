import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { CadastrarClienteComponent } from './cadastrar.component';
import { EditarClienteComponent } from './editar.component';
import { ListarClienteComponent } from './listar.component';
import { FormularioClienteComponent } from './componentes/cliente-formulario.component';
import { ListaClienteComponent } from './componentes/cliente-lista.component';
import { EnderecoFormularioComponent } from '../endereco/componentes/endereco-formulario.component';

import { ClienteRoutingModule } from './cliente.route';
import { ClienteAppComponent } from './cliente.app.component';
import { ClienteService } from './services/cliente.service';
import { EnderecoService } from '../endereco/services/endereco.service';

@NgModule({
    declarations: [
        ClienteAppComponent,
        CadastrarClienteComponent,
        EditarClienteComponent,
        ListarClienteComponent,
        FormularioClienteComponent,
        ListaClienteComponent,
        EnderecoFormularioComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ClienteRoutingModule,
        NgMultiSelectDropDownModule.forRoot()
    ],
    providers: [
        ClienteService,
        EnderecoService
    ],
    exports: []
})
export class ClienteModule { }