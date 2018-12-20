import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cns-callout-card',
  templateUrl: './callout-card.component.html',
  styleUrls: ['./callout-card.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CalloutCardComponent {

  @Input() img: string;
  @Input() imgAlt = 'callout card image';
}
