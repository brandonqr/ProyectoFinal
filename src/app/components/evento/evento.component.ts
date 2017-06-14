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
  constructor(
    private eService:EventoService,
    private aRouter:ActivatedRoute
  ) {
    this.aRouter.params.subscribe(params=>{
      this.id=params['id'];
      this.eService.obtenerEventoById(this.id).subscribe(
        res=>{
          this.evento=res;
        },
        err=>{
          console.log(err);
        }
      )
    })
  }

  ngOnInit() {
  }

}
