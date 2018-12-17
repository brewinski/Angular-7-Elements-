import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'banner-test',
  template: `
    <section>
      <div>
        <h1>{{ title }}</h1>
        <span>{{ blurb }}</span>
      </div>
      <div>
        <img src='{{ src }}' />
      </div>
    </section>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BannerTestComponent implements OnInit {
  @Input() public title: string;
  @Input() public blurb: string;
  @Input() public src: string;

  ngOnInit() {
    if (!this.title || this.title.length === 0 || !this.blurb || this.blurb.length === 0) {
      console.error(`Title attribute must be provided!`);
    }
  }
}
