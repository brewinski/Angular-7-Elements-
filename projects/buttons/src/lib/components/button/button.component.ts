import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'cns-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ButtonComponent {
  @Input() name: string;
  @Input() type: 'primary' | 'secondary' | 'default' = 'default';
  @Input() disabled = false;
  @Input() action: 'button' | 'submit' = 'button';

  @Output() btnFocus: EventEmitter<any> = new EventEmitter();
  @Output() btnBlur: EventEmitter<any> = new EventEmitter();
  @Output() btnClick: EventEmitter<any> = new EventEmitter();
  @Output() btnDoubleClick: EventEmitter<any> = new EventEmitter();
}
