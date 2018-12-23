import { NgModule, Injector } from '@angular/core';
import { TextInputComponent } from './components/text-input/text-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ElementDef } from 'projects/shared/interfaces';
import { RegisterWebComponents } from 'projects/shared/helpers';

const angularElements: ElementDef[] = [
  { key: 'cns-text-input', component: TextInputComponent }
];

@NgModule({
  declarations: [TextInputComponent],
  imports: [FormsModule, ReactiveFormsModule],
  entryComponents: [TextInputComponent]
})
export class FormModule {
  constructor(private injector: Injector) {
    RegisterWebComponents(angularElements, injector);
  }
}
