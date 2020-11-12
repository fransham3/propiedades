import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Img } from 'src/app/models/img.model';
import { ImagenService } from 'src/app/services/imagen.service';
import { PropiedadService } from 'src/app/services/propiedad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html'
})
export class ImgComponent implements OnInit {

  public imagenes: Img;
  public subirImgForm: FormGroup;
  public imagenSubir: File;
  public fotos: Img[] = [];
  // public img: string;
  public _id: string;
  public titulo: string;



  constructor(private imagenService: ImagenService,
              private propiedadService: PropiedadService) { }

  ngOnInit(): void {


    this.subirImgForm = new FormGroup({
      image: new FormControl()
     });

    this.cargarImagenesByPropiedad();
    this.obtenerTitulo();
  }


  cargarImagenes() {
    
    this.imagenService.cargarImagenes()
    .subscribe( resp => {
      this.imagenes = resp.fotos;
      
    });
    
  }

  cargarImagenesByPropiedad() {
    this.imagenService.cargarImagenesByPropiedad()
    .subscribe( resp => {
      console.log(resp);

      // this.portada = resp.fotos[0].imageURL;
      this.imagenes = resp.fotos;
      
    });
  }

  portada(propiedad_id, img: string) {
    console.log(img);
    console.log(propiedad_id);
    
    
    
    this.propiedadService.actualizarImg(propiedad_id, img).
      subscribe(resp => {
        console.log(resp);
        
      })
  }

  // cargarImagenesById(id: string) {

  //   this.imagenService.cargarImagenesById(id)
  //     .subscribe( resp => {
  //       console.log(resp);
        
  //       this.fotos = resp.fotos;
  //     });

  // }

  obtenerTitulo() {
    this.titulo = this.imagenService.tituloProp;
  }



  cambiarImagen(file: File) {
   this.imagenSubir = file;
  }

  subirImagen() {
    console.log(this.subirImgForm.value);
    
    
    this.imagenService.subirImagen(this.imagenSubir)
      .then(imagenes => {
          Swal.fire(
          'Listo!',
          `Se ha ingresado la imagen satisfactoriamente`,
          'success'
          )
          this.cargarImagenesByPropiedad();

      });
    }


    elImg(id: string) {
      
      Swal.fire({
        title: '¿Eliminar imagen?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#336330f1',
        cancelButtonColor: '#ed4634',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
  
          this.imagenService.eliminarImagen(id)
              .subscribe(resp => {
                Swal.fire(
                  'Eliminado!'
                  )
                });
                this.cargarImagenesByPropiedad();
              
        }
  
      });

    }

    

}
