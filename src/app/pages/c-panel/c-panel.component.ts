import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-c-panel',
  templateUrl: './c-panel.component.html',
  styleUrls: ['./c-panel.component.css']
})
export class CPanelComponent {

  constructor(private usuarioService: UsuarioService) { }

  logout() {
    this.usuarioService.logout();
  }

}
