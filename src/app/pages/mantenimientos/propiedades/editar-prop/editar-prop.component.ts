import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-prop',
  templateUrl: './editar-prop.component.html',
  styles: [
  ]
})
export class EditarPropComponent implements OnInit {

  public editarPropForm: FormGroup;

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {

    this.editarPropForm = this.fb.group({
      titulo: ['', Validators.required],
      desc_corta: ['', Validators.required],
      precio: ['', Validators.required],
      tipo_prop: ['', Validators.required],
      tipo_oper: ['', Validators.required],
      region: [''],
      provincia: [''],
      comuna: [''],
      descripcion: [''],
      
    })
  }

  actualizarPropiedad() {
    console.log(this.editarPropForm.value);
    
  }

}
