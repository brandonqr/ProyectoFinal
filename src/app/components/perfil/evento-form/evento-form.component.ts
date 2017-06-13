import { Component, NgModule,  NgZone, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from "@angular/forms";
import { ActivatedRoute } from  "@angular/router";
import { MapsAPILoader } from '@agm/core';
import {  } from '@types/googlemaps';

declare let jQuery:any;
declare let $:any;
declare let google;

@Component({
  selector: 'app-evento-form',
  templateUrl: './evento-form.component.html',
  styles: []
})
export class EventoFormComponent implements OnInit {



eventoForm:FormGroup;
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
    private ngZone: NgZone
   ) { }

  ngOnInit() {
    //formulario, validar y otras cosas

    this.eventoForm=new FormGroup({
     'nombre': new FormControl('', [Validators.required, Validators.minLength(5)]),
     'descripcion': new FormControl('', Validators.required),
     'imagen': new FormControl( Validators.required),
     'fecha': new FormControl(Validators.required),
     'categoria': new FormControl(Validators.required)
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
