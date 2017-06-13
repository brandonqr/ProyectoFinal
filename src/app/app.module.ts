import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IndexComponent } from './components/index/index.component';
import { LoginRegistroModalComponent } from './components/login-registro-modal/login-registro-modal.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { MiPerfilComponent } from './components/perfil/mi-perfil/mi-perfil.component';
import { EventoFormComponent } from './components/perfil/evento-form/evento-form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//rutas
import { APP_ROUTING } from "./app.routes";

//servicios
import { UsuarioService } from "./services/usuario.service";

//Pipes
import { imgDefaultPipe } from "./pipes/imageDefault.pipe";
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    LoginRegistroModalComponent,
    PerfilComponent,
    MiPerfilComponent,
    EventoFormComponent,
    imgDefaultPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
