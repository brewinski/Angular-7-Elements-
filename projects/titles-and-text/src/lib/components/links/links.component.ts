import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LinksComponent {
  @Input() href = '';
}
