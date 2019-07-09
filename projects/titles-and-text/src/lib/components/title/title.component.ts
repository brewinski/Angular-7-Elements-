import { Component, OnInit, Input, ViewEncapsulation, ViewChild, TemplateRef, ElementRef } from '@angular/core';

@Component({
  selector: 'lib-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TitleComponent implements OnInit {
  @Input() public element: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h2';
  @Input() public typestyle: 'heading' | 'subheading' = 'heading';
  @Input() public variation: 'default' | 'subdued' = 'default';
  @Input() public weight: 'normal' | 'bolder' | 'bold' = 'bolder';

  @ViewChild('content', { static: true }) tempate: TemplateRef<ElementRef>;

  html = '<h1>testing</h1>';

  ngOnInit() {
  }

  getContent(): string {
    return `<${this.element}>${this.tempate.elementRef.nativeElement}</${this.element}>`;
  }

}
