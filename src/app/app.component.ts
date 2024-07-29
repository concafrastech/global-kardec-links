import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TitlePageComponent} from "./pages/components/title-page/title-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitlePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'gk-sites';
}
