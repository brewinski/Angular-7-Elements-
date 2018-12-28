import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Variation } from 'projects/shared/interfaces/types.type';

@Component({
  selector: 'cns-caption',
  templateUrl: './caption.component.html',
  styleUrls: ['./caption.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CaptionComponent {
  @Input() public variation: Variation = 'normal';
}
