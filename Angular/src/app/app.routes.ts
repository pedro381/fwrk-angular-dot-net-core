import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './navegacao/not-found/not-found.component';

const rootRouterConfig: Routes = [
    { path: '', redirectTo: 'clientes', pathMatch: 'full'},    
    { path: 'clientes', 
                    loadChildren: () => import('./cliente/cliente.module')
                    .then(m => m.ClienteModule)},

    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports:[
        RouterModule.forRoot(rootRouterConfig, { enableTracing: false })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}