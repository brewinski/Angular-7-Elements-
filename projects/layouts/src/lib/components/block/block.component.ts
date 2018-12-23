import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'cns-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BlockComponent implements OnInit {

  @Input() alignment: 'left' | 'centre' | 'right' = 'centre';
  @Input() triangle: 'both' | 'top' | 'bottom' | 'none' = 'none';

  ngOnInit() {
    console.log(this.triangle)
  }

}
