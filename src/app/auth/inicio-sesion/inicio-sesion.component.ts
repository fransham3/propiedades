import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {

 public formSubmitted = false;

 public loginForm = this.fb.group({
    email: [localStorage.getItem('email') || '', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    remember: [localStorage.getItem('remember') || false]
 });

 constructor (private router: Router,
             private fb: FormBuilder,
             private usuarioService: UsuarioService) {
   
 }

 login() {
   
  this.usuarioService.login(this.loginForm.value)
      .subscribe(resp => {

        if (this.loginForm.get('remember').value) {
          localStorage.setItem('email', this.loginForm.get('email').value);
          localStorage.setItem('remember', this.loginForm.get('remember').value);
        } else {
          localStorage.removeItem('email');
          localStorage.removeItem('remember');

        }

        //Navegar al Dashboard
        this.router.navigateByUrl('/panel-administracion');
        
      }, (err) => {
        Swal.fire('Error', err.error.msg, 'error');
      });
   
 }

}
