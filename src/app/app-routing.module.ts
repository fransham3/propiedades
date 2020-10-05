import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { PropiedadesComponent } from './pages/propiedades/propiedades.component';
import { InicioSesionComponent } from './auth/inicio-sesion/inicio-sesion.component';
import { CPanelComponent } from './pages/c-panel/c-panel.component';
import { IngresarPropComponent } from './pages/pages_c-panel/ingresar-prop/ingresar-prop.component';
import { PagesComponent } from './pages/pages/pages.component';


const routes: Routes = [
  { path: '', 
    component: PagesComponent,
    children: [
      { path: 'inicio', component: InicioComponent,  pathMatch: 'full'},
      { path: 'contacto', component: ContactoComponent,  pathMatch: 'full'},
      { path: 'propiedades', component: PropiedadesComponent,  pathMatch: 'full'},
      { path: '', redirectTo: '/inicio', pathMatch: 'full'}
    ]
  },
  { path: 'login', component: InicioSesionComponent,  pathMatch: 'full'},

  { path: 'panel-administracion', 
  component: CPanelComponent,
  canActivate: [AuthGuard],
  pathMatch: 'full'},

  
  { path: '**', component: InicioComponent,  pathMatch: 'full'}
];











@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
