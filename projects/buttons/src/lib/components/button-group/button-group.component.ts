import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cns-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ButtonGroupComponent implements OnInit {
  @Input() public type: string;
  @Input() public data: string[];

  ngOnInit() {
  }

}
