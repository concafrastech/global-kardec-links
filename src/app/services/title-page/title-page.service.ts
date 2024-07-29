import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

// Models
import {HeaderData} from "../../models/headerData";

@Injectable({
  providedIn: 'root'
})
export class TitlePageService {

  private headerData = new BehaviorSubject<HeaderData>({
    titlePage: 'Global Kardec - Online',
    subTitle: '',
  });

  /**
   *
   * @constructor
   */
  get HeaderData(): HeaderData {
    return this.headerData.value
  }

  /**
   *
   * @param headerData
   * @constructor
   */
  set HeaderData(headerData: HeaderData) {
    this.headerData.next(headerData)
  }
}
