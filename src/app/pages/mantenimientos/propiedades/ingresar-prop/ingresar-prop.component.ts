import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Comuna } from 'src/app/models/comuna.model';
import { Propiedad } from 'src/app/models/propiedad.model';
import { Provincia } from 'src/app/models/provincia.model';
import { Region } from 'src/app/models/region.model';
import { ImagenService } from 'src/app/services/imagen.service';
import { PropiedadService } from 'src/app/services/propiedad.service';
import { UbicacionService } from 'src/app/services/ubicacion.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-ingresar-prop',
  templateUrl: './ingresar-prop.component.html'
})
export class IngresarPropComponent implements OnInit {

  public propiedad: Propiedad;

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

  public region: string;
  public selectProvincia: string;
  public selectComuna: string;
  public selectedRegion: string;
  public selectedProvincia: string;
  public selectedComuna: string;
  public rID: string;
  public pID: string;

  public crearPropForm: FormGroup;
  public titulo: string;
  public desc_corta: string;
  public precio: string;
  public tipo_prop: string;
  public tipo_oper: string;
  public idProp: string;

  // crearPropForm = new FormGroup({

  //   titulo : new FormControl(),
  //   tradeName : new FormControl(),
  //   registrationNumber : new FormControl(),
  //   language : new FormControl(),
  //   legalForm : new FormControl(),
  //   businessClass : new FormControl(),
  //   extMerchId : new FormControl(),
  //   contactName :  new FormControl(),
  //   ecomInd : new FormControl(),
  //   taxCountry : new FormControl(),
  //   processingRegion : new FormControl(),
  //   vatNumber : new FormControl()
  //  });

   


  constructor(private ubicacionService: UbicacionService,
              private propiedadService: PropiedadService,
              private imagenService: ImagenService,
              private fb: FormBuilder,
              private router: Router) { 
                this.propiedad = propiedadService.propiedad;
              }

  ngOnInit(): void {
    this.cargarRegion();

    this.crearPropForm = new FormGroup({
      titulo: new FormControl(),
      desc_corta: new FormControl(),
      precio: new FormControl(),
      tipo_prop: new FormControl(),
      tipo_oper: new FormControl(),
      // region: new FormControl(),provincia
      // descripcion: new FormControl(),
     });

    this.crearPropForm = this.fb.group({
      titulo: ['', Validators.required],
      desc_corta: [ '', Validators.required],
      precio: ['', Validators.required],
      tipo_prop: ['', Validators.required],
      tipo_oper: ['', Validators.required],
      // region: ['', Validators.required],
      
      // descripcion: [''],
      
    });


  }

  guardarPropiedad(propiedad: Propiedad) {
    
    // console.log(this.crearPropForm.value);
    this.propiedadService.crearPropiedad(this.crearPropForm.value)
        .subscribe(resp => {
          console.log(resp);
          Swal.fire(
            'Listo!',
            `Se ha ingresado la propiedad satisfactoriamente`,
            'success'
          )
          // redireccionar a ingresar imagen
          this.idProp = resp.propiedad._id;

          this.imagenService.obtenerID(this.idProp);
          
          this.router.navigateByUrl(`/panel-administracion/img-prop`);
          
          
          
        });
    

  }

  cargarRegion() {
    this.ubicacionService.cargarRegion()
        .subscribe( resp => {
              
          this.regiones = resp.regiones;
          this.idRegion = resp._id;
          this.nombreRegion = resp.nombre;

          this.selectedRegion = this.region;
          
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
    console.log(this.region);
    this.rID = this.region;

    this.cargarProvincia();
      
    // }
    
  }

  llenadoComunas() {
    console.log(this.selectProvincia);
    this.pID = this.selectProvincia;

    this.cargarComuna();
      
  }

  reset() {
    this.crearPropForm.reset();
  }

  

}
