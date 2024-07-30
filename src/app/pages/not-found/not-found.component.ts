import {Component} from '@angular/core';
import {TitlePageService} from "../../services/title-page/title-page.service";

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.less'
})
export class NotFoundComponent {

  constructor(private titlePageService: TitlePageService) {
    titlePageService.HeaderData = {
      titlePage: 'Global Kardec - Online',
      subTitle: ' Algo de errado não está certo',
    }
  }
}
