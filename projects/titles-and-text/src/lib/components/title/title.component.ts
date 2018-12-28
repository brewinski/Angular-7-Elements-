import { Component, Input, ViewEncapsulation } from '@angular/core';
import { HeadingType, Element, FontWeight, Variation } from 'projects/shared/interfaces/types.type';

@Component({
  selector: 'cns-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TitleComponent {
  @Input() public element: Element = 'h2';
  @Input() public size: HeadingType = 'heading';
  @Input() public variation: Variation = 'normal';
  @Input() public weight: FontWeight = 'bolder';
}
