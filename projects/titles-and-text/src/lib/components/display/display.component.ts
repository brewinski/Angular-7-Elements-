import { Component, Input, ViewEncapsulation } from '@angular/core';
import { DisplaySize, Element, FontWeight, Variation } from 'projects/shared/interfaces/types.type';

/**
 * A text element designed to draw attention as a large heading or title.
 *
 * Example of usage:
 * <example-url>http://localhost:4200/titles-and-text</example-url>
 */
@Component({
  selector: 'cns-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class DisplayComponent {
  @Input() public size: DisplaySize = 'large';
  @Input() public element: Element = 'p';
  @Input() public variation: Variation = 'normal';
  @Input() public weight: FontWeight = 'bold';
}
