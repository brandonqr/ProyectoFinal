import { Component, OnInit } from '@angular/core';
import { EventoService } from "../../../services/evento.service";

@Component({
  selector: 'app-eventos-creados',
  templateUrl: './eventos-creados.component.html',
  styles: []
})
export class EventosCreadosComponent implements OnInit {
public usuario:any=JSON.parse(localStorage.getItem('usuario'));
public token:any=localStorage.getItem('token');
public id:string=this.usuario['_id'];
public eventos:any[]=[];
  constructor( private eService:EventoService ) { }

  ngOnInit() {
    this.eService.obtenerEventosByUSerId(this.id).subscribe(
      res=>{
        this.eventos=res;
      },
      err=>{}
    )
  }
  eliminar(evento){
    this.eService.eliminarEvento(evento['_id'],this.token).subscribe(
      res=>{

      },
      err=>{
        window.location.href = "http://localhost:4200/perfil/eventos-creados";
      }
    )
    console.log(evento)
  }

}
