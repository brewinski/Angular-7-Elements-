import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cns-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ArticleComponent {

  placeholderImageSrc = 'https://i0.wp.com/cohenwoodworking.com/wp-content/uploads/2016/09/placeholder.jpg?ssl=1';
  @Input() public type: 'full-width' | 'flex-width' = 'full-width';
}
