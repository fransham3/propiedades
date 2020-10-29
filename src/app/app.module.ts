import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { PropiedadesComponent } from './pages/propiedades/propiedades.component';
import { CPanelComponent } from './pages/c-panel/c-panel.component';
import { IngresarPropComponent } from './pages/mantenimientos/propiedades/ingresar-prop/ingresar-prop.component';
import { PagesComponent } from './pages/pages/pages.component'
import { InicioSesionComponent } from './auth/inicio-sesion/inicio-sesion.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GestionarPropComponent } from './pages/mantenimientos/propiedades/gestionar-prop/gestionar-prop.component';
import { RouterModule } from '@angular/router';
import { ImgComponent } from './pages/mantenimientos/propiedades/img/img.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { EditarPropComponent } from './pages/mantenimientos/propiedades/editar-prop/editar-prop.component';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ContactoComponent,
    PropiedadesComponent,
    InicioSesionComponent,
    CPanelComponent,
    IngresarPropComponent,
    PagesComponent,
    GestionarPropComponent,
    ImgComponent,
    // EditarPropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
