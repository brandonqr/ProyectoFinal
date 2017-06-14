import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "../../services/usuario.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {
  public id:string;
  public usuario:any;
  constructor(
    private uService:UsuarioService,
    private aRouter:ActivatedRoute

  ) {
    this.aRouter.params.subscribe(params=>{
      this.id=params['id'];
      this.uService.obtenerUsuarioById(this.id).subscribe(
        res=>{
          this.usuario=res;
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
