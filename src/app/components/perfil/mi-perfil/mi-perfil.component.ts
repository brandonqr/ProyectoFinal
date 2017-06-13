import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "../../../services/usuario.service";
import { imgDefaultPipe } from "../../../pipes/imageDefault.pipe";

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styles: []
})
export class MiPerfilComponent implements OnInit {
public usuario:any;
  constructor( private uService:UsuarioService) { }

  ngOnInit() {
    this.usuario=this.uService.getUsuario();
  }

}
