// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Propiedad } from 'src/app/models/propiedad.model';
// import { PropiedadService } from 'src/app/services/propiedad.service';

// @Component({
//   selector: 'app-editar-prop',
//   templateUrl: './editar-prop.component.html',
//   styles: [
//   ]
// })
// export class EditarPropComponent implements OnInit {

//   public editarPropForm: FormGroup;

//   constructor(  private fb: FormBuilder,
//                 private propiedadService: PropiedadService) { }

//   ngOnInit(): void {

//     this.editarPropForm = this.fb.group({
//       titulo: ['potoconcaca', Validators.required],
//       desc_corta: ['', Validators.required],
//       precio: ['', Validators.required],
//       tipo_prop: ['', Validators.required],
//       tipo_oper: ['', Validators.required],
      
//       descripcion: [''],
      
//     })
//   }

//   actualizarPropiedad(propiedad: Propiedad) {
//     console.log(this.editarPropForm.value);
//     this.propiedadService.actualizarPropiedad(propiedad, this.editarPropForm.value)
//         .subscribe(resp => {
//           console.log(resp);
          
//         })
//   }

// }
