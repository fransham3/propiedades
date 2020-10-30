import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { cargarImagenes, cargarImagenesById, eliminarImagenes } from '../interfaces/cargar-imagenes';
import { Img } from '../models/img.model';

const base_url = environment.base_url;


@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  public idProp: string;
  public tituloProp: string;

  constructor(private http: HttpClient) { }
  
  obtenerID(idProp) {
    console.log(idProp);
    this.idProp = idProp;
    
  }

  obtenerTitulo(tituloProp) {
    console.log(tituloProp);
    this.tituloProp = tituloProp;
    
  }
  
  cargarImagenes() {

    const url = `${base_url}/upload`;
    return this.http.get<cargarImagenes>(url);
  
  }

  cargarImagenesByPropiedad() {

    // const idProp = this.idProp;

    const url = `${base_url}/upload/ver/${this.idProp}`;
    return this.http.get<cargarImagenes>(url);
    console.log(url);
    
  
  }

  cargarPortadas() {
    const url = `${base_url}/upload/portada/${this.idProp}`;
    return this.http.get<cargarImagenes>(url);
  }

  
  cargarImagenesById(id: string) {

    const url = `${base_url}/upload/${id}`;
    return this.http.get<cargarImagenesById[]>(url);
  
  }

  

  // subirFoto(archivo: File):Observable<HttpEvent<any>>{
  //   let url = `${base_url}/upload/add`;
  //   let formData = new FormData();
  //   formData.append("image", archivo);
  //   const req = new HttpRequest('POST', url, formData, { reportProgress: true });
  //   return this.http.request(req);
  // }
  

  async subirImagen(archivo: File) { //,id: string

      const idProp = this.idProp;
    
    // try {
      
      const url = `${base_url}/upload/add/${this.idProp}`;
      console.log(url);
      
      const formData = new FormData();
      formData.append('image', archivo);

      const resp = await fetch(url, {
        method: 'POST',
        body: formData
      });
      

      const data = await resp.json();
      console.log(data);
      
      
      
    // } catch (error) {
    //   console.log(error);
    //   return false;
    // }
    
  
  }


  eliminarImagen(id: string) {

    const url = `${base_url}/upload/delete/${id}`;
    return this.http.delete(url);
    
  }
  

}
