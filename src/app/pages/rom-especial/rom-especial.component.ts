import {Component} from '@angular/core';
import {BtnZoomComponent} from "../components/btn-zoom/btn-zoom.component";
import {MessagesModule} from "primeng/messages";
import {Message} from "primeng/api";
import {TitlePageService} from "../../services/title-page/title-page.service";

@Component({
  selector: 'app-rom-especial',
  standalone: true,
  imports: [
    BtnZoomComponent,
    MessagesModule
  ],
  templateUrl: './rom-especial.component.html',
  styleUrl: './rom-especial.component.less'
})
export class RomEspecialComponent {
  messages: Message[] = [{
    severity: 'info',
    detail: 'Atenção, das 17:30 às 18:00 todos nos encontraremos no auditório'
  }];

  constructor(private titlePageService: TitlePageService) {
    titlePageService.HeaderData = {
      titlePage: 'Global Kardec - Escola de Estudos Espíritas',
      subTitle: 'Caso o Zoom solicite Senha de acesso: <span>100</span>',
    }
  }
}
