import {Component, Directive, OnInit} from '@angular/core';
// Prime Ng
import {MessagesModule} from "primeng/messages";
import {Message} from 'primeng/api';

// Componentes
import {BtnZoomComponent} from "../components/btn-zoom/btn-zoom.component";

// Service
import {TitlePageService} from "../../services/title-page/title-page.service";

@Component({
  selector: 'app-roms-links',
  standalone: true,
  imports: [
    BtnZoomComponent,
    MessagesModule
  ],
  templateUrl: './roms-links.component.html',
  styleUrl: './roms-links.component.less',
})
export class RomsLinksComponent{
  messages: Message[] = [{
    severity: 'info',
    detail: 'Atenção, das 17:30 às 18:00 todos nos encontraremos no auditório'
  }];

  constructor(private titlePageService: TitlePageService) {
    titlePageService.HeaderData = {
      titlePage:'Global Kardec - Escola de Estudos Espíritas',
      subTitle: 'Caso o Zoom solicite Senha de acesso: <span>100</span>',
    }
  }
}
