import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { PropiedadesComponent } from './pages/propiedades/propiedades.component';
import { CPanelComponent } from './pages/c-panel/c-panel.component';
import { IngresarPropComponent } from './pages/pages_c-panel/ingresar-prop/ingresar-prop.component';
import { PagesComponent } from './pages/pages/pages.component';
import { InicioSesionComponent } from './auth/inicio-sesion/inicio-sesion.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ContactoComponent,
    PropiedadesComponent,
    InicioSesionComponent,
    CPanelComponent,
    IngresarPropComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
