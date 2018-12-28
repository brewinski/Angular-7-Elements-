import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FontColours, TextSizing } from 'projects/shared/interfaces/types.type';

@Component({
  selector: 'cns-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LinksComponent {
  @Input() public href = '';
  @Input() public size: TextSizing = 'normal';
  @Input() public color: FontColours = 'aqua';
}
