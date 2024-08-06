import {Routes} from '@angular/router';

// Components
import {RomsLinksComponent} from "./pages/roms-links/roms-links.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {NbdeEspecialComponent} from "./pages/rom-especial/nbde-especial/nbde-especial.component";
import {RomEspecialComponent} from "./pages/rom-especial/rom-especial.component";
import {HomeComponent} from "./integration/home/home.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "global-kardec-brasil",
    component: RomsLinksComponent
  },
  {
    path: "nbde-especial",
    component: NbdeEspecialComponent
  },
  {
    path: "aula-especial",
    component: RomEspecialComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];
