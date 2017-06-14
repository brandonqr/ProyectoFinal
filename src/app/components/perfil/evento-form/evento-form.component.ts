import { Component, NgModule,  NgZone, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from "@angular/forms";
import { ActivatedRoute, Router } from  "@angular/router";
import { MapsAPILoader } from '@agm/core';
import {  } from '@types/googlemaps';
import { EventoService } from "../../../services/evento.service";


declare let jQuery:any;
declare let $:any;
declare let google;

@Component({
  selector: 'app-evento-form',
  templateUrl: './evento-form.component.html',
  styles: []
})
export class EventoFormComponent implements OnInit {


public token=localStorage.getItem('token');
eventoForm:FormGroup;
public error:any;
public noError:any;
evento:any={
  nombre : "",
  lugar : "",
  descripcion:"",
  fecha:"",
  imagen:"",
  autor : "",
  categoria:""
};
lat: number = 51.678418;
lng: number = 7.809007;
  constructor(
    private ngZone: NgZone,
    private eService:EventoService,
    private router:Router
   ) { }

  ngOnInit() {
    //formulario, validar y otras cosas

    this.eventoForm=new FormGroup({
     'nombre': new FormControl('', [Validators.required, Validators.minLength(5)]),
     'descripcion': new FormControl('', Validators.required),
     'lat': new FormControl('',Validators.required),
     'lng': new FormControl('',Validators.required),
     'fecha': new FormControl('',Validators.required),
     'imagen': new FormControl('',Validators.required)
   })

    //set current position
    this.setCurrentPosition();


  }
  private setCurrentPosition() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
    });
  }
}
   crearQuack(){
     this.eventoForm.value.lat=this.lat;
     this.eventoForm.value.lng=this.lng;
     this.eService.crearEvento(this.eventoForm.value, this.token).subscribe(
       res=>{
         this.noError=true;
         $("#error").hide();
         this.router.navigate(['/perfil/eventos-creados']);
       },
       err=>{
         console.log(err)
         this.error=true;
    }
     )
  }

dragEndMarcador( marcador:any, evento ){
  let lat= evento.coords.lat;
  let lng = evento.coords.lng;

  marcador.lat = lat;
  marcador.lng=lng;

  //actualizar posicion del marcador
  this.lat=lat;
  this.lng=lng;
}

}
