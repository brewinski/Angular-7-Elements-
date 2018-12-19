import { Component, OnInit, AfterViewChecked } from '@angular/core';

import { SyntaxHighlightService } from '../syntax-highlight.service';

@Component({
  selector: 'app-titles-and-text',
  templateUrl: './titles-and-text.component.html',
  styleUrls: ['./titles-and-text.component.scss']
})
export class TitlesAndTextComponent implements OnInit, AfterViewChecked {

  public dxl = '<cns-display typestyle="xlarge">DisplayXLarge</cns-display>';
  public dxls = '<cns-display typestyle="xlarge" variation="subdued">DisplayXLarge</cns-display>';
  public dl = '<cns-display typestyle="large">DisplayLarge</cns-display>';
  public dls = '<cns-display typestyle="large" variation="subdued">DisplayLarge</cns-display>';
  public highlighted = false;

  constructor(private syntaxHighlightService: SyntaxHighlightService) { }

  ngOnInit() {
  }

   /**
   * Highlight blog post when it's ready
   */
  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.syntaxHighlightService.highlightAll();
      this.highlighted = true;
    }
  }
}
