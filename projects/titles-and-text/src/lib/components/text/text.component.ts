import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cns-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TextComponent implements OnInit {
  @Input() public variation: 'body' | 'subdued' | 'disabled' | 'reversed' = 'body';
  @Input() public transform: 'capitalize' | 'uppercase' | 'lowercase' | 'italic' | 'none' = 'none';

  ngOnInit() {
  }

}
