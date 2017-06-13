import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "../../services/usuario.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  public usuario;
  constructor( private uService:UsuarioService ) {  }

  ngOnInit() {
    this.usuario=this.uService.getUsuario();
  }

}
