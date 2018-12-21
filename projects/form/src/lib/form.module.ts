import { NgModule, Injector } from '@angular/core';
import { TextInputComponent } from './components/text-input/text-input.component';
import { createCustomElement } from '@angular/elements';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ElementDef } from 'projects/shared/interfaces';
import { RegisterWebComponents } from 'projects/shared/helpers';

const angularElements: ElementDef[] = [
  { key: 'cns-text-input', component: TextInputComponent }
];

@NgModule({
  declarations: [angularElements.map(elementDef => elementDef.component)],
  imports: [FormsModule, ReactiveFormsModule],
  entryComponents: [angularElements.map(elementDef => elementDef.component)]
})
export class FormModule {
  constructor(private injector: Injector) {
    RegisterWebComponents(angularElements, injector);
  }

  ngDoBootstrap() {}
}
