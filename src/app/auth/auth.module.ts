import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';



@NgModule({
  declarations: [
    InicioSesionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    InicioSesionComponent
  ]
})
export class AuthModule { }
