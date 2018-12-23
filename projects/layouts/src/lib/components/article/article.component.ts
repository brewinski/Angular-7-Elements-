import { Component, Input, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'cns-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ArticleComponent implements OnInit {
  @Input() public type: 'full-width' | 'flex-width' = 'full-width';
  @Input() img: string;

  ngOnInit() { }
}
