import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cns-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input() public imgSrc = 'http://news.orgatec.de/wp-content/uploads/2016/05/laptop-mobile_BLOG.jpg';
  @Input() public date: string;
  @Input() public title: string;
  @Input() public content: string;
  @Input() public link: string;
  @Input() public type: 'full-width' | 'flex-width' = 'full-width';

  constructor() { }

  ngOnInit() {
  }

}
