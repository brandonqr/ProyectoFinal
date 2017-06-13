import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "../../services/usuario.service";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: []
})
export class PerfilComponent implements OnInit {
public usuario:any;
  constructor(private uService:UsuarioService) {

   }

  ngOnInit() {
    this.usuario=this.uService.getUsuario();
  }

}
