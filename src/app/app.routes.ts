import {Routes} from '@angular/router';

// Components
import {RomsLinksComponent} from "./pages/roms-links/roms-links.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";

export const routes: Routes = [
  {
    path: "global-kardec-brasil",
    component: RomsLinksComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];
