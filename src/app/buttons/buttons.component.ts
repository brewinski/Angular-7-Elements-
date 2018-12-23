import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  data = ['Item left', 'Item middle', 'Item right'];

  constructor() { }

  ngOnInit() {
  }

  handleClick(event) {
    if (event.detail === 'submit') {
      this.onSubmit();
    }
  }

  onSubmit() {
    console.log('submit');
  }
}
