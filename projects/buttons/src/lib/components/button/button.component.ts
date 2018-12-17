import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cns-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ButtonComponent implements OnInit {
  @Input() public name: string;
  @Input() public type: 'primary' | 'secondary' | 'default' = 'default';
  @Input() public disabled = false;

  ngOnInit() { }
}
