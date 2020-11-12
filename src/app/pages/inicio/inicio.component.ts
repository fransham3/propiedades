import { Component, OnInit } from '@angular/core';
import { Img } from 'src/app/models/img.model';
import { Propiedad } from 'src/app/models/propiedad.model';
import { ImagenService } from 'src/app/services/imagen.service';
import { PropiedadService } from 'src/app/services/propiedad.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: [
  ]
})
export class InicioComponent implements OnInit {

  public portada: string;
  public propiedades: Propiedad;
  public imagenes: Img;


  constructor(private propiedadService: PropiedadService,
              private imagenService: ImagenService) { }

  ngOnInit(): void {
    this.cargarRecientes();
    // this.cargarPortadas();
  }

  cargarRecientes() {
    this.propiedadService.cargarRecientes()
      .subscribe( resp => {
          console.log(resp);
          this.propiedades = resp.recientesProps;
          
          for (let n = 0; n < 9; n++) {
            const element = this.propiedades[n]._id;
            
            console.log(element);
            this.imagenService.obtenerID(element);
            this.cargarPortadas();
          }

          
      });
  }

  cargarPortadas() {
    this.imagenService.cargarPortadas()
      .subscribe(resp => {
        console.log(resp);
        this.imagenes = resp.fotos;
        // this.portada = resp.fotos[0].imageURL;
      });
  }

}
