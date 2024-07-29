import {Component, Input, OnInit} from '@angular/core';

// Service
import {TitlePageService} from "../../../services/title-page/title-page.service";
// PrimeNg
import {MenuItem} from 'primeng/api';
import {MenubarModule} from "primeng/menubar";

@Component({
  selector: 'app-title-page',
  standalone: true,
  imports: [
    MenubarModule
  ],
  templateUrl: './title-page.component.html',
  styleUrl: './title-page.component.less'
})
export class TitlePageComponent implements OnInit {

  items: MenuItem[] | undefined;

  constructor(private titlePageService: TitlePageService) {
  }

  ngOnInit() {

    this.items = [
      {
        label: 'Home',
        url: 'https://allankardeconline.com/'

      },
      {
        label: 'Quem somos',
        url: 'https://allankardeconline.com/sobre'
      },
      {
        label: 'Global Kardec',
        url: 'https://allankardeconline.com/global-kardec'

      }
    ]
  }

  get titlePage(): string {
    return <string>this.titlePageService.HeaderData.titlePage
  }
  get subTitle(): string {
    return <string>this.titlePageService.HeaderData.subTitle
  }
}
