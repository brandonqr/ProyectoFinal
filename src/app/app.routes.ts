import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from "./components/index/index.component";
import  { PerfilComponent } from "./components/perfil/perfil.component";

import { PERFIL_ROUTES } from "./components/perfil/perfil.routes";

const APP_ROUTES: Routes = [
  { path: '', component: IndexComponent },
  {
    path: 'perfil',
    component: PerfilComponent,
    children: PERFIL_ROUTES
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
