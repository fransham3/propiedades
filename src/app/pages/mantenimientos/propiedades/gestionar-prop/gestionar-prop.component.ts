import { Component, OnInit } from '@angular/core';
import { Propiedad } from 'src/app/models/propiedad.model';
import { PropiedadService } from 'src/app/services/propiedad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestionar-prop',
  templateUrl: './gestionar-prop.component.html',
  styles: [
  ]
})
export class GestionarPropComponent implements OnInit {

    public totalPaginas: number = 1;
    public totalPropiedades: number;
    public propiedades: Propiedad[] = [];
    public page: number = 1;

  constructor(private propiedadService: PropiedadService) { }

  ngOnInit(): void {
      this.cargarPropiedades();
  }
  
  cargarPropiedades() {
    this.propiedadService.cargarPropiedades(this.page)
        .subscribe( resp => {
          // console.log(resp.result);
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
