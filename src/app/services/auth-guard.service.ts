import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from "@angular/router";
import { UsuarioService } from "./usuario.service";

@Injectable()
export class AuthGuardService implements CanActivate {
  public usuario:any=localStorage.getItem('usuario');
  constructor(private uService:UsuarioService) {}
  canActivate(next:ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if (this.usuario) {
      return true;
    }else{
      console.error("No puedes acceder si no estas conectado");
      return false;
    }
  }
}
