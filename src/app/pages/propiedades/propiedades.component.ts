import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Img } from 'src/app/models/img.model';
import { Propiedad } from 'src/app/models/propiedad.model';
import { BusquedasService } from 'src/app/services/busquedas.service';
import { ImagenService } from 'src/app/services/imagen.service';
import { PropiedadService } from 'src/app/services/propiedad.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

const base_url = environment.base_url;




@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html'
})
export class PropiedadesComponent implements OnInit {


  public sendEmailForm: FormGroup;
  public propID: string;
  public propiedades: Propiedad[] = [];
  public termino: string;
  public page: number = 1;
  public totalPropiedades: any;
  public totalPaginas: any;
  public idProp: string;
  public portada: string;
  public imagenes: Img;
  public element: string;
  public img: string;

  public nombre: string;
  public email: string;
  public telefono: string;
  public tipoConsulta: string;
  public comentario: string;
  public linkPropiedades: string;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private busquedasService: BusquedasService,
              private propiedadService: PropiedadService,
              private imagenService: ImagenService) { }

  ngOnInit(): void {
    // this.cargarImagenes();

    this.sendEmailForm = new FormGroup({
      nombre: new FormControl(),
      email: new FormControl(),
      telefono: new FormControl(),
      tipoConsulta: new FormControl(),
      comentario: new FormControl()
     });
    
    this.activatedRoute.params
    .subscribe( ({ termino }) => {
      this.busquedaGlobal(termino);
      console.log(this.idProp);
      
    });
  }
  
  busquedaGlobal(termino: string) {
    

    this.busquedasService.busquedaGlobal(termino, this.page)
    .subscribe((resp: any) => {
      console.log(resp);
      this.propiedades = resp.result.docs;
      this.termino = resp.busqueda;
      this.page = resp.result.page;
      this.totalPropiedades = resp.result.totalDocs;
      this.totalPaginas = resp.result.totalPages;
      this.idProp = resp.result.docs._id;
      this.img = resp.result.docs.img;

      console.log(this.totalPropiedades);

      for (let n = 0; n < resp.result.docs.length; n++) {
        const element = resp.result.docs[n]._id;
        
        console.log(element);
        this.imagenService.obtenerID(element);
        this.cargarPortadas();
      }
      
      
      
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
    this.imagenService.obtenerID(propID);
    this.cargarImagenesByPropiedad();
    
       
  }


  cargarImagenes() {
    this.imagenService.cargarImagenes()
        .subscribe( resp => {
          this.imagenes = resp.fotos;
          this.portada = resp.fotos[0].imageURL;
          
        })
    
  }

  cargarImagenesByPropiedad() {
    this.imagenService.cargarImagenesByPropiedad()
    .subscribe( resp => {
      console.log(resp);
      
      
      this.portada = resp.fotos[0].imageURL;
      this.imagenes = resp.fotos;
      // console.log(this.portada);
      
    });
  }

  cargarPortadas() {
    this.imagenService.cargarPortadas()
      .subscribe(resp => {
        console.log(resp);
        this.imagenes = resp.fotos;
      });
  }

  sendEmail(propID: string, propTITULO: string) {

    console.log(propID, propTITULO);

    console.log(this.sendEmailForm.value);

  
    this.linkPropiedades = `${base_url}/propiedades/modal/${propID}`;

    this.propiedadService.sendEmail(this.sendEmailForm.value, propTITULO, this.linkPropiedades)
        .subscribe(resp => {
          
          Swal.fire(
            'Enviado!',
            `Hemos recibido tu mensaje, te contactaremos a la brevedad.`,
            'success'
          )
          this.sendEmailForm.reset();
        });
    

  }
  
}
