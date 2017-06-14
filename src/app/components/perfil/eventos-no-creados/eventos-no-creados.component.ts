import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "../../../services/usuario.service";

@Component({
  selector: 'app-eventos-no-creados',
  templateUrl: './eventos-no-creados.component.html',
  styles: []
})
export class EventosNoCreadosComponent implements OnInit {
  public usuario:any=JSON.parse(localStorage.getItem('usuario'));
  public id:string=this.usuario['_id'];
  public eventos:any[]=[];
  constructor(private uService:UsuarioService) { }

  ngOnInit() {
    this.uService.obtenerUsuarioById(this.id).subscribe(
      res=>{
        this.eventos=res.favorites.eventos;
      },
      err=>{}
    )
  }

}
