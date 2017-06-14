import { Component, OnInit } from '@angular/core';
import  { EventoService } from "../../services/evento.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styles: []
})
export class EventoComponent implements OnInit {
  public id:string;
  public evento:any;
  public cambio:any;
  public lat:number;
  public lng:number;
  public usuario:any=JSON.parse(localStorage.getItem('usuario'));
  constructor(
    private eService:EventoService,
    private aRouter:ActivatedRoute
  ) {
    this.aRouter.params.subscribe(params=>{
      this.id=params['id'];
      this.eService.obtenerEventoById(this.id).subscribe(
        res=>{
          this.evento=res;
          console.log(typeof(this.evento.lat))
          //actualizar asignar latitud y longitud para mostrarlo en el template
          this.lat=parseInt(this.evento.lat);
          this.lng=parseInt(this.evento.lng);
        },
        err=>{

        }
      )
    })
  }

  ngOnInit() {

  }
  asistir(){
    let token=localStorage.getItem('token');
    this.eService.agregarAsistencia(this.id,token,this.evento).subscribe(
      res=>{
      },
      err=>{
        this.cambio=(this.cambio==true)?false:true;
      }
    )
  }

}
