import { RouterModule, Routes } from '@angular/router';
import { MiPerfilComponent }from "./mi-perfil/mi-perfil.component";
import { EventoFormComponent } from "./evento-form/evento-form.component";
import { EventosCreadosComponent } from "./eventos-creados/eventos-creados.component";
import { EventosNoCreadosComponent } from "./eventos-no-creados/eventos-no-creados.component";

export const PERFIL_ROUTES: Routes = [
  { path: 'mi-perfil', component: MiPerfilComponent },
  { path: 'evento-form', component: EventoFormComponent },
  { path: 'eventos-creados', component: EventosCreadosComponent },
    { path: 'eventos-no-creados', component: EventosNoCreadosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'mi-perfil' }
];
