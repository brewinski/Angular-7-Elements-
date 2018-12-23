import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cns-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class DisplayComponent {
  @Input() public size: 'xlarge' | 'large' | 'medium' | 'small' = 'large';
  @Input() public element: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' = 'p';
  @Input() public variation: 'default' | 'subdued' = 'default';
}
