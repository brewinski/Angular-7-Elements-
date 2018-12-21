import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { ButtonGroupComponent } from './components/button-group/button-group.component';
import { ElementDef } from 'projects/shared/interfaces';
import { RegisterWebComponents } from 'projects/shared/helpers';

const angularElements: ElementDef[] = [
  { key: 'cns-button', component: ButtonComponent },
  { key: 'cns-button-group', component: ButtonGroupComponent }
];

@NgModule({
  declarations: [ButtonComponent, ButtonGroupComponent],
  imports: [CommonModule],
  entryComponents: [ButtonComponent, ButtonGroupComponent]
})
export class ButtonsModule {
  constructor(private injector: Injector) {
    RegisterWebComponents(angularElements, injector);
  }
}
