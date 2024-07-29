import {Component, Directive, OnInit} from '@angular/core';

// Componentes
import {TitlePageComponent} from "../components/title-page/title-page.component";
import {BtnZoomComponent} from "../components/btn-zoom/btn-zoom.component";

// Prime Ng
import {MessagesModule} from "primeng/messages";
import { Message } from 'primeng/api';




@Component({
  selector: 'app-roms-links',
  standalone: true,
  imports: [
    TitlePageComponent,
    BtnZoomComponent,
    MessagesModule
  ],
  templateUrl: './roms-links.component.html',
  styleUrl: './roms-links.component.less'
})
export class RomsLinksComponent implements OnInit {
  messages: Message[] = [];

  ngOnInit() {
    this.messages = [
      { severity: 'info', detail: 'Atenção, das 17:30H as 17:50H todos nos encontraremos no auditório' },
    ];
  }
}
