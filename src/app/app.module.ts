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
import { AgmCoreModule } from '@agm/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//rutas
import { APP_ROUTING } from "./app.routes";

//servicios
import { UsuarioService } from "./services/usuario.service";
import { EventoService } from "./services/evento.service";

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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDSk0wgg8zV26dmBb6LrcNsT9oxa8Hk4fs'
    }),
    BrowserModule,
    HttpModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UsuarioService,
    EventoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
