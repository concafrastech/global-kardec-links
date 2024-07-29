import {Component, OnInit} from '@angular/core';

import { MenuItem } from 'primeng/api';

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
}
