import {Routes} from '@angular/router';

// Components
import {RomsLinksComponent} from "./pages/roms-links/roms-links.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {NbdeEspecialComponent} from "./pages/rom-especial/nbde-especial/nbde-especial.component";

export const routes: Routes = [
  {
    path: "global-kardec-brasil",
    component: RomsLinksComponent
  },
  {
    path: "aula-especial",
    component: NbdeEspecialComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];
