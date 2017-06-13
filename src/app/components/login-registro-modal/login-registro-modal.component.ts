import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UsuarioService } from "../../services/usuario.service";
import { Router} from "@angular/router";

declare let jQuery:any;
declare let $:any;

@Component({
  selector: 'app-login-registro-modal',
  templateUrl: './login-registro-modal.component.html',
  styles: [
    'h1 { color: black; }'
  ]
})
export class LoginRegistroModalComponent implements OnInit {
  public errRegistro:any[]=[];
  public usuarioLogin:any;
  public usuarioRegistrado:any;
  public errorMsg:any;
  public usuario:any;
  public token:any;
  public loginForm:FormGroup;
  public registroForm:FormGroup;

  constructor(private uService:UsuarioService, private router:Router) {

    this.loginForm = new FormGroup({
         'email': new FormControl('',[
                                       Validators.required,
                                       Validators.pattern("^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$")
                                     ]),
         'password': new FormControl('', Validators.required)
       })

       this.registroForm = new FormGroup({
            'nombre': new FormControl('', Validators.required),
            'apellidos': new FormControl('', Validators.required),
            'nickname': new FormControl('', Validators.required),
            'fecha_nacimiento': new FormControl('', Validators.required),
            'email': new FormControl('',[
                                          Validators.required,
                                          Validators.pattern("^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$")
                                        ]),
            'password': new FormControl('', Validators.required)
          })


   }

  ngOnInit() {
    this.usuario=this.uService.getUsuario();
    this.token=this.uService.getToken();
    console.log(this.usuario)
  }
  private abrirModal(){
    $("#modalLogin").modal();
  }
  private cerrarSesion(){
    localStorage.clear();//eliminar todo el localStorage;
    window.location.href = "http://localhost:4200";
  }
  private login(){

    this.uService.login(this.loginForm['_value']).subscribe(
      res=>{
        console.log(res)
        //guardar en localstorage el usuario y el token para poder usarlos luego en toda la web
        localStorage.setItem('usuario', JSON.stringify(res));
        localStorage.setItem('token', res.token);

        this.router.navigate(['perfil']);
        $("#modalLogin").modal('hide');//ocultar el modal
        console.log($("#modalLogin"))
        //version cutre es actualizando, para actualizar los datos despues del login
        window.location.href = "http://localhost:4200";
      },
      err=>{
        this.errorMsg=err['_body'];
      }
    )
  }
  private registro(){
    this.uService.registro(this.registroForm['_value']).subscribe(
      res=>{
        $(".alert.alert-danger").hide();//elimina la ultima alerta de la validacion
        this.usuarioRegistrado=true;//es para usarlo en ng if para saber si se ha registrado correctamente y mostrar una alerta de registrado.
        this.loginForm['_value'].email=this.registroForm['_value'].email;
        this.loginForm['_value'].password=this.registroForm['_value'].password;
        this.login();//autologin

      },
      err=>{
           $("#erroresRegistro").hide();
        let errores=JSON.parse(err['_body']).errors;
        for(let  e in errores){
          this.errRegistro.push(errores[e].message);
        }
        $(".alert.alert-danger").hide();

      }

    )
  }

}
