import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TitlePageComponent} from "./pages/components/title-page/title-page.component";
import {FooterComponent} from "./pages/components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TitlePageComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'gk-sites';
}
