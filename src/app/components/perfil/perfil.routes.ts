import { RouterModule, Routes } from '@angular/router';
import { MiPerfilComponent }from "./mi-perfil/mi-perfil.component";
import { EventoFormComponent } from "./evento-form/evento-form.component";

export const PERFIL_ROUTES: Routes = [
  { path: 'mi-perfil', component: MiPerfilComponent },
  { path: 'evento-form', component: EventoFormComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'mi-perfil' }
];
