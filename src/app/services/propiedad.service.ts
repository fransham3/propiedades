import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CargarModal, CargarPropiedad, CrearPropiedad } from '../interfaces/cargar-propiedades';
import { Propiedad } from '../models/propiedad.model';
import { Usuario } from '../pages/models/usuario.model';


const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PropiedadService {

  public propiedad: Propiedad;


  constructor(private http: HttpClient,
              private router: Router) { }

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get headers() {
    return {
      headers: {
        'x-token': this.token
      }
    }
  }

  get pID(): string {
    return this.propiedad._id || '';
  }



  crearPropiedad(propiedad: Propiedad) {
    const url = `${base_url}/propiedades`;
    return this.http.post<CrearPropiedad>(url, propiedad, this.headers);
  }



  cargarPropiedades(page: number = 1) {

    const url = `${base_url}/propiedades?page=${page}`;
    return this.http.get<CargarPropiedad>(url);

      
  }


  cargarModal(propID) {
    const url = `${base_url}/propiedades/modal/${propID}`;
    return this.http.get<CargarModal>(url, this.headers);
  }



  actualizarPropiedad(propID, data: {titulo: string, tipo_oper: string, precio: number, desc_corta: string}) {

    data = {
      ...data
    };
    
    return this.http.put(`${base_url}/propiedades/${propID}`, data, this.headers);
  }


  
  eliminarPropiedades(propiedad: Propiedad) {

    const url = `${base_url}/propiedades/${propiedad._id}`;
    return this.http.delete(url, this.headers);
    
  }
 


}
