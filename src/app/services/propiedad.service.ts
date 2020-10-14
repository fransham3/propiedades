import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CargarModal, CargarPropiedad } from '../interfaces/cargar-propiedades';
import { Propiedad } from '../models/propiedad.model';
import { Usuario } from '../pages/models/usuario.model';


const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PropiedadService {



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



  cargarPropiedades(page: number = 1) {

    const url = `${base_url}/propiedades?page=${page}`;
    return this.http.get<CargarPropiedad>(url);

      
  }


  cargarModal(propID) {
    const url = `${base_url}/propiedades/modal/${propID}`;
    return this.http.get<CargarModal>(url, this.headers);
  }

  eliminarPropiedades(propiedad: Propiedad) {

    const url = `${base_url}/propiedades/${propiedad._id}`;
    return this.http.delete(url, this.headers);
    
  }
 


}
