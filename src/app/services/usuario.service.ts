import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import { HttpModule } from '@angular/http';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from "./global";


@Injectable()
export class UsuarioService {
  public usuario:any;
  public token:any;
public url:String;
  constructor( private http:Http ) {
    this.url=GLOBAL.url;
  }
   login(usuario){
    let params=JSON.stringify(usuario);
    let headers = new Headers({'Content-Type':'application/json'});
    return this.http.post(`${this.url}/users/login`, params, {headers:headers})
                .map(res=>res.json());

   }
   getUsuario(){
     let usuario=JSON.parse(localStorage.getItem('usuario'));

     return (usuario!=undefined)?usuario:null;
   }
   getToken(){
     let token=localStorage.getItem('token');

     return (token!=undefined)?token:null;
   }
   registro(usuario){
     let params=JSON.stringify(usuario);
     let headers = new Headers({'Content-Type':'application/json'});
     return this.http.post(`${this.url}/users/registro`, params, {headers:headers})
                 .map(res=>res.json());

   }
   obtenerUsuarioById(id){
     return this.http.get(`${this.url}/users/${id}`)
                                                    .map(res=>res.json())
   }

}
