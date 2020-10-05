import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';

const routes: Routes = [

    { path: 'login', component: InicioSesionComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
