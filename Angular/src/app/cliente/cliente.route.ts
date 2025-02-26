import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarClienteComponent } from './cadastrar.component';
import { EditarClienteComponent } from './editar.component';
import { ListarClienteComponent } from './listar.component';

import { ClienteAppComponent } from './cliente.app.component';

const clienteRouterConfig: Routes = [
    {
        path: '', component: ClienteAppComponent,
        children: [
            { path: '', redirectTo: 'listar' },
            { 
                path: 'listar', 
                component: ListarClienteComponent,
            },
            { path: 'cadastrar', component: CadastrarClienteComponent },
            { path: 'editar/:id', component: EditarClienteComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(clienteRouterConfig)
    ],
    exports: [RouterModule]
})
export class ClienteRoutingModule { }