import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

/**
 * Example of usage:
 * <example-url>http://localhost:4200/titles-and-text</example-url>
 */
@Component({
  selector: 'lib-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class DisplayComponent implements OnInit {
  @Input() public typestyle: 'xlarge' | 'large' | 'medium' | 'small' = 'large';
  @Input() public variation: 'default' | 'subdued' = 'default';
  @Input() transform: 'normal' | 'bold' = 'bold';

  ngOnInit() {
  }
}
