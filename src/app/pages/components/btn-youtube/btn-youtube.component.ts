import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-btn-youtube',
  standalone: true,
  imports: [],
  templateUrl: './btn-youtube.component.html',
  styleUrl: './btn-youtube.component.less'
})
export class BtnYoutubeComponent {
  @Input() textButton: string | undefined;
  @Input() url: string | undefined;
}
