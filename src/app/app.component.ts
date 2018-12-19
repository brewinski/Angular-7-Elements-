import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent  implements AfterViewInit {
  title = 'web-components-lib-poc';

  public group: FormGroup;

  @ViewChild('focusControl') focusControl: ElementRef;
  @ViewChild('disableControl') disableControl: ElementRef;

  public disabled = true;
  public readonly = true;

  constructor(private fb: FormBuilder) {
    this.group = this.fb.group({ text: 'my vlaue' });
    this.group.valueChanges.subscribe(val => console.log(val));
  }

  ngAfterViewInit() {
    this.focusControl.nativeElement.querySelector('input').focus();
  }
}
