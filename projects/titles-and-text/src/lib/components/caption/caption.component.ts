import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cns-caption',
  templateUrl: './caption.component.html',
  styleUrls: ['./caption.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CaptionComponent implements OnInit {
  @Input() public variation: 'default' | 'subdued' = 'default';

  ngOnInit() {
  }

}
