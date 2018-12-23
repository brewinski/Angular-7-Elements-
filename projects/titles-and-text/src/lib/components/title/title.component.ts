import { Component, OnInit, Input, ViewEncapsulation, ViewChild, TemplateRef, ElementRef } from '@angular/core';
import { template } from '@angular/core/src/render3';

@Component({
  selector: 'cns-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TitleComponent implements OnInit {
  @Input() public element: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h2';
  @Input() public typestyle: 'heading' | 'subheading' = 'heading';
  @Input() public variation: 'default' | 'subdued' = 'default';

  @ViewChild('content') tempate: TemplateRef<ElementRef>;

  html = '<h1>testing</h1>';

  ngOnInit() {
  }

  getContent(): string {
    console.log(this.tempate.elementRef);
    return `<${this.element}>${this.tempate.elementRef.nativeElement}</${this.element}>`;
  }

}
