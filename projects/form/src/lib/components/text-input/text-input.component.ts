import { Component,
         OnInit,
         Input,
         Output,
         EventEmitter
} from '@angular/core';

@Component({
  selector: 'cns-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {
  /**
   * @description component input value allows the user to set the defualt value and change the value as required.
   *              defualt value is an empty string;
   */
  @Input() value = '';
  /**
   * @description change event will be executed whenever the value of the control changes.
   */
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  /**
   * @returns string value.
   */
  public getValue(): string {
    return this.value;
  }

}
