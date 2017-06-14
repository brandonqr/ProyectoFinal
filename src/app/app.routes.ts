import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from "./components/index/index.component";
import  { PerfilComponent } from "./components/perfil/perfil.component";
import { EventoComponent  } from "./components/evento/evento.component";
import { UsuarioComponent } from "./components/usuario/usuario.component";

import { PERFIL_ROUTES } from "./components/perfil/perfil.routes";

const APP_ROUTES: Routes = [
  { path: '', component: IndexComponent },
  {
    path: 'perfil',
    component: PerfilComponent,
    children: PERFIL_ROUTES
  },
  { path: 'evento/:id', component:EventoComponent },
  { path: 'usuario/:id', component:UsuarioComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
