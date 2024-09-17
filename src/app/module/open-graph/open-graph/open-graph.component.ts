import {Component, Input, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-open-graph',
  standalone: true,
  imports: [],
  templateUrl: './open-graph.component.html',
  styleUrl: './open-graph.component.less'
})
export class OpenGraphComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
  @Input() url: string = '';

  constructor(private metaService: Meta, private titleService: Title) {
  }

  ngOnInit(): void {
    this.updateOpenGraphTags();
  }

  updateOpenGraphTags() {
    // Set the page title
    if (this.title) {
      this.titleService.setTitle(this.title);
      this.metaService.updateTag({property: 'og:title', content: this.title});
    }

    // Set the Open Graph description
    if (this.description) {
      this.metaService.updateTag({name: 'description', content: this.description});
      this.metaService.updateTag({property: 'og:description', content: this.description});
    }

    // Set the Open Graph image
    if (this.image) {
      this.metaService.updateTag({property: 'og:image', content: this.image});
    }

    // Set the Open Graph URL
    if (this.url) {
      this.metaService.updateTag({property: 'og:url', content: this.url});
    }
  }
}
