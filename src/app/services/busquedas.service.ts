import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;


@Injectable({
  providedIn: 'root'
})
export class BusquedasService {

  constructor(private http: HttpClient) { }

  busquedaGlobal(termino: string, page: number = 1){

    const url = `${base_url}/todo/${termino}?page=${page}`;
    return this.http.get(url);
  }

}
