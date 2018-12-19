import { NgModule, Injector } from '@angular/core';
import { TextInputComponent } from './components/text-input/text-input.component';
import { createCustomElement } from '@angular/elements';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

interface ElementDef {
  key: string;
  component: any;
}

const angularElements: ElementDef[] = [
  { key: 'cns-text-input', component: TextInputComponent }
];

@NgModule({
  declarations: [TextInputComponent],
  imports: [FormsModule, ReactiveFormsModule],
  entryComponents: [angularElements.map(elementDef => elementDef.component)]
})
export class FormModule {
  constructor(private injector: Injector) {
    angularElements.forEach(element => {
      const textInputElement = createCustomElement(element.component, { injector });
      customElements.define(element.key, textInputElement);
    });
  }

  ngDoBootstrap() {}
}
