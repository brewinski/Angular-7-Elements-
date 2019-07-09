import { Component,
         Input,
         Output,
         EventEmitter,
         ViewChild,
         ViewEncapsulation,
} from '@angular/core';
import { ControlValueAccessor, DefaultValueAccessor } from '@angular/forms';
import { getAccessValidatorProvider } from '../../constants';

type InputType = 'text' | 'number' | 'date' | 'range' | 'password' |
                 'submit' | 'reset' | 'radio' | 'checkbox' | 'button' |
                 'color' | 'datetime-local' | 'email' | 'file' | 'month';

@Component({
  selector: 'cns-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  providers: [getAccessValidatorProvider(TextInputComponent)],
  encapsulation: ViewEncapsulation.Emulated
})
export class TextInputComponent implements ControlValueAccessor {
  /**
   * @description component input value allows the user to set the defualt value and change the value as required.
   *              defualt value is an empty string;
   * @example
   * <cns-text-input type="text" value="Christopher"></cns-text-input>
   */
  @Input() value = '';

  /**
   * @description the id of the component.
   * @example
   * <cns-text-input type="text" id="my-input-id"></cns-text-input>
   */
  @Input() id = '';

  /**
   * @description the placeholder text that will be used when the input is empty.
   */
  @Input() placeholder = '';

  /**
   * @description the type attribute is mapped to the type of inptut e.g text, number, date, range, ....
   * @example
   * <cns-text-input type="number"></cns-text-input>
   */
  @Input() type: InputType = 'text';

  /**
   * @description
   * @example
   * <cns-text-input disabled="true"></cns-text-input>
   */
  @Input() disabled: 'true' | 'false' | null;

  /**
   * @description change event will be executed whenever the value of the control changes.
   */

  @Input() readonly: 'true' | 'false' | null;

  @Output() change = new EventEmitter();

  @ViewChild(DefaultValueAccessor, { static: true }) valueAccessor: DefaultValueAccessor;

  public writeValue(obj: any): void {
    this.valueAccessor.writeValue(obj);
  }
  public registerOnChange(fn: any): void {
    this.valueAccessor.registerOnChange(fn);
  }
  public registerOnTouched(fn: any): void {
    this.valueAccessor.registerOnTouched(fn);
  }
  public setDisabledState?(isDisabled: boolean): void {
    this.valueAccessor.setDisabledState(isDisabled);
  }

  public isDisabled(): string | null {
    return this.disabled === 'true' ? 'true' : null;
  }

  public isReadonly(): string | null {
    return this.readonly === 'true' ? 'true' : null;
  }
}
