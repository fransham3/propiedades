import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Propiedad } from 'src/app/models/propiedad.model';
import { BusquedasService } from 'src/app/services/busquedas.service';
import { PropiedadService } from 'src/app/services/propiedad.service';


@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html'
})
export class PropiedadesComponent implements OnInit {

  public propiedades: Propiedad[] = [];
  public termino: string;
  public page: number = 1;
  public totalPropiedades: any;
  public totalPaginas: any;
  public propID: string;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private busquedasService: BusquedasService,
              private propiedadService: PropiedadService) { }

  ngOnInit(): void {
    this.activatedRoute.params
        .subscribe( ({ termino }) => this.busquedaGlobal(termino));
  }

  busquedaGlobal(termino: string) {
    this.busquedasService.busquedaGlobal(termino, this.page)
          .subscribe((resp: any) => {
            // console.log(resp);
            this.propiedades = resp.result.docs;
            this.termino = resp.busqueda;
            this.page = resp.result.page;
            this.totalPropiedades = resp.result.totalDocs;
            this.totalPaginas = resp.result.totalPages;
            this.propID = resp.result._id;
            
          });
    
  }

  
  buscar(termino: string) {

    if (termino.length == 0) {
      return;
      
    }
    this.router.navigateByUrl(`/propiedades/${termino}`);
    
  }

  CambiarPagina(valor: number){
    this.page += valor;


    if (this.page <= 0) {
      this.page = 1;
    } else if (this.page > this.totalPaginas) {
      this.page = this.totalPaginas;
    }

    this.busquedaGlobal(this.termino);
  
  }


  
  modal(propID: string) {
    
    console.log(propID);

    // this.router.navigateByUrl(`/propiedades/modal/${propID}`);

    this.propiedadService.cargarModal(propID)
          .subscribe((resp: any) => {
            console.log(resp);
          });
       
  }
  
}
