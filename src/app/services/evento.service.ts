import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import { HttpModule } from '@angular/http';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from "./global";

@Injectable()
export class EventoService {
public url:String;
public evento:any;
  constructor( private http:Http ) {
    this.url=GLOBAL.url;
   }
   crearEvento(evento, token){
     let params=JSON.stringify(evento);
     console.log(evento)
     let headers=new Headers({
                              'Content-Type': 'application/json',
                              'Authorization': token
                            });
     return this.http.post(`${this.url}/eventos`, params, {headers:headers})
                 .map(res=>res.json());

   }
   obtenerEventos(){
     return this.http.get(`${this.url}/eventos`)
                                                .map(res=>res.json())
   }
   obtenerEventoById(id){
     return this.http.get(`${this.url}/eventos/${id}`)
                                                .map(res=>res.json())
   }

}
