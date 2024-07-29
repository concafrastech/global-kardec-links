import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-btn-zoom',
  standalone: true,
  imports: [],
  templateUrl: './btn-zoom.component.html',
  styleUrl: './btn-zoom.component.less'
})

export class BtnZoomComponent {
  @Input() textButton: string | undefined;
  @Input() url: string | undefined;

}
