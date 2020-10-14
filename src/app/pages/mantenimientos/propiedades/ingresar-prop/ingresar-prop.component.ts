import { Component, OnInit } from '@angular/core';
import { Comuna } from 'src/app/models/comuna.model';
import { Provincia } from 'src/app/models/provincia.model';
import { Region } from 'src/app/models/region.model';
import { UbicacionService } from 'src/app/services/ubicacion.service';


@Component({
  selector: 'app-ingresar-prop',
  templateUrl: './ingresar-prop.component.html'
})
export class IngresarPropComponent implements OnInit {

  public regiones: Region[] = [];
  public idRegion: string;
  public nombreRegion: string;

  public provincias: Provincia[] = [];
  public idProvincia: string;
  public nombreProvincia: string;
  public rgOFprovincia: string;

  public comunas: Comuna[] = [];
  public idComuna: string;
  public nombreComuna: string;

  public selectRegion: string;
  public selectProvincia: string;
  public selectComuna: string;
  public selectedRegion: string;
  public selectedProvincia: string;
  public selectedComuna: string;
  public rID: string;
  public pID: string;

  constructor(private ubicacionService: UbicacionService) { }

  ngOnInit(): void {
    this.cargarRegion();
  }

  cargarRegion() {
    this.ubicacionService.cargarRegion()
        .subscribe( resp => {
              
          this.regiones = resp.regiones;
          this.idRegion = resp._id;
          this.nombreRegion = resp.nombre;

          this.selectedRegion = this.selectRegion;
          
        })
  }

  cargarProvincia() {
    this.ubicacionService.CargarProvincia(this.rID)
        .subscribe( resp => {      
          
          this.provincias = resp.provincias;
          this.idProvincia = resp._id;
          this.nombreProvincia = resp.nombre;
          this.selectedProvincia = this.selectProvincia;
          console.log(this.provincias);
          
                   
          
        })
  }

  cargarComuna() {
    this.ubicacionService.CargarComuna(this.pID)
        .subscribe( resp => {
          
          this.comunas = resp.comunas;
          this.idComuna = resp._id;
          this.nombreComuna = resp.nombre;
          
        })
  }


  llenadoProvincias() {
    console.log(this.selectRegion);
    this.rID = this.selectRegion;

    this.cargarProvincia();
      
    // }
    
  }

  llenadoComunas() {
    console.log(this.selectProvincia);
    this.pID = this.selectProvincia;

    this.cargarComuna();
      
  }

  

}
