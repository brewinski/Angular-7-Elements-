import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FontTransformation, Variation } from 'projects/shared/interfaces/types.type';

@Component({
  selector: 'cns-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TextComponent {
  @Input() public variation: Variation = 'normal';
  @Input() public transform: FontTransformation = 'none';
}
