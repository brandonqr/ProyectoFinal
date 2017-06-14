import { Component, NgModule,  NgZone, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from "@angular/forms";
import { ActivatedRoute } from  "@angular/router";
import { MapsAPILoader } from '@agm/core';
import {  } from '@types/googlemaps';
import { EventoService } from "../../services/evento.service";
declare let jQuery:any;
declare let $:any;
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {
public eventos:any[]=[];
public lat=41.9759254
public lng=2.8209464
  constructor(
    private eService:EventoService,
  ) { }

  ngOnInit() {
    this.obtenerEventos();
  }
  obtenerEventos(){
    this.eService.obtenerEventos().subscribe(
      res=>{
        this.eventos=res;
      },
      err=>{
      }
    )
  }

}
