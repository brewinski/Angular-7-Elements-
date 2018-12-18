import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titles-and-text',
  templateUrl: './titles-and-text.component.html',
  styleUrls: ['./titles-and-text.component.scss']
})
export class TitlesAndTextComponent implements OnInit {

  public htmlString = '<cns-display typestyle="xlarge">DisplayXLarge</cns-display>';

  constructor() { }

  ngOnInit() {
  }

}
