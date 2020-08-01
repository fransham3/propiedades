import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { PropiedadesComponent } from './pages/propiedades/propiedades.component';


const routes: Routes = [
  { path: 'inicio', component: InicioComponent,  pathMatch: 'full'},
  { path: 'contacto', component: ContactoComponent,  pathMatch: 'full'},
  { path: 'propiedades', component: PropiedadesComponent,  pathMatch: 'full'},
  { path: '**', component: InicioComponent,  pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
