import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';

import { ButtonComponent } from './components/button/button.component';
import { ButtonGroupComponent } from './components/button-group/button-group.component';
import { ElementDef } from 'projects/shared/interfaces';
import { RegisterWebComponents } from 'projects/shared/helpers';

const angularElements: ElementDef[] = [
  { key: 'cns-button', component: ButtonComponent },
  { key: 'cns-button-group', component: ButtonGroupComponent }
];

@NgModule({
  declarations: [angularElements.map(elementDef => elementDef.component)],
  imports: [CommonModule],
  entryComponents: [angularElements.map(elementDef => elementDef.component)]
})
export class ButtonsModule {
  constructor(private injector: Injector) {
    RegisterWebComponents(angularElements);
  }

  ngDoBootstrap() {}
}
