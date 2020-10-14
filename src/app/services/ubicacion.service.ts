import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CargarComuna, CargarProvincia, CargarRegion } from '../interfaces/cargar-ubicacion';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  constructor(private http: HttpClient) { }


  cargarRegion() {

    const url = `${base_url}/ubicaciones/regiones`;
    return this.http.get<CargarRegion>(url);
  }

  CargarProvincia(rID) {

    const url = `${base_url}/ubicaciones/provincias/${rID}`;
    return this.http.get<CargarProvincia>(url);
  }

  CargarComuna(pID) {

    const url = `${base_url}/ubicaciones/comunas/${pID}`;
    return this.http.get<CargarComuna>(url);
  }


  




}
