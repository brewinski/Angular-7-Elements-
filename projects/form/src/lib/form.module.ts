import { NgModule, Injector } from '@angular/core';
import { FormComponent } from './form.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [FormComponent, TextInputComponent],
  imports: [
  ],
  exports: [FormComponent],
  entryComponents: [TextInputComponent]
})
export class FormModule {
  constructor(private injector: Injector) {
    const textInputElement = createCustomElement(TextInputComponent, { injector });
    customElements.define('cns-text-input', textInputElement);
  }

  ngDoBootstrap() {}
}
