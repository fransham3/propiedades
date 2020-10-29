import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Propiedad } from 'src/app/models/propiedad.model';
import { ImagenService } from 'src/app/services/imagen.service';
import { PropiedadService } from 'src/app/services/propiedad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestionar-prop',
  templateUrl: './gestionar-prop.component.html',
  styles: [
  ]
})
export class GestionarPropComponent implements OnInit {


    public editarPropForm: FormGroup;
    public propiedad: Propiedad;

    public totalPaginas: number = 1;
    public totalPropiedades: number;
    public propiedades: Propiedad[] = [];
    public page: number = 1;
    public propID: string;
    public prop: Propiedad;
    
    public titulo: string;
    public desc_corta: string;
    public precio: string;
    public tipo_prop: string;
    public tipo_oper: string;
    public descripcion: string;

  constructor(private propiedadService: PropiedadService,
              private router: Router,
              private fb: FormBuilder,
              private imagenService: ImagenService) {

                this.propiedad = propiedadService.propiedad;
              }

  ngOnInit(): void {
      this.cargarPropiedades();


      this.editarPropForm = new FormGroup({
       titulo: new FormControl(),
       desc_corta: new FormControl(),
       precio: new FormControl(),
       tipo_prop: new FormControl(),
       tipo_oper: new FormControl(),
       descripcion: new FormControl(),
      });

      this.editarPropForm = this.fb.group({
        titulo: [this.prop.titulo, [Validators.required]],
        desc_corta: [this.propiedad.desc_corta, [Validators.required]],
        precio: [this.propiedad.precio, [Validators.required]],
        tipo_prop: [this.propiedad.tipo_prop, [Validators.required]],
        tipo_oper: [this.propiedad.tipo_oper, [Validators.required]],
        
        descripcion: [''],
        
      });

  }

  // get propID(): string {
  //   return this.propiedad. || '';
  // }
  


  cargarPropiedades() {
    this.propiedadService.cargarPropiedades(this.page)
        .subscribe( resp => {
          //  console.log(resp.result);
          this.totalPropiedades = resp.result.totalDocs;
          this.totalPaginas = resp.result.totalPages;
          this.propiedades = resp.result.docs;
          this.page = resp.result.page;
          
        })
    
  }

  CambiarPagina(valor: number){
    this.page += valor;


    if (this.page <= 0) {
      this.page = 1;
    } else if (this.page > this.totalPaginas) {
      this.page = this.totalPaginas;
    }

    this.cargarPropiedades();
    // console.log(this.page);
    
    
  }

  btnActualizar(propiedad: Propiedad) {
    this.propID = propiedad._id;
    console.log(this.propID);
    this.prop = propiedad;
    
    // this.actualizarPropiedad(this.propID);
    
  }
  
  actualizarPropiedad(propID: string, prop) {
    // this.router.navigateByUrl(`/panel-administracion/editarp/${propiedad._id}`);
    console.log(this.propID);

    
    
    console.log(this.editarPropForm.value);
    this.propiedadService.actualizarPropiedad(propID, this.editarPropForm.value)
        .subscribe(resp => {
          console.log(resp);
          Swal.fire(
            'Editado!',
            `Se ha editado la propiedad satisfactoriamente`,
            'success'
          )
          
        });

  }

  editarImg(idPropiedad: string, tituloPropiedad: string) {
    this.imagenService.obtenerID(idPropiedad);
    this.imagenService.obtenerTitulo(tituloPropiedad);
          
          this.router.navigateByUrl(`/panel-administracion/img-prop`);
  }

  elPropiedad(propiedad: Propiedad) {
    
    Swal.fire({
      title: '¿Eliminar propiedad?',
      text: `Se eliminará la propiedad: ${propiedad.titulo}`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#336330f1',
      cancelButtonColor: '#ed4634',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {

        this.propiedadService.eliminarPropiedades(propiedad)
            .subscribe(resp => {
              this.cargarPropiedades();
                    Swal.fire(
                      'Eliminado!',
                      `${propiedad.titulo} se ha eliminado.`
                    )
                });
            
      }

    })
    

  }

}
