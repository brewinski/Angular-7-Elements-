import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';

import { ButtonComponent } from './components/button/button.component';
import { ButtonGroupComponent } from './components/button-group/button-group.component';

@NgModule({
  declarations: [ButtonComponent, ButtonGroupComponent],
  imports: [CommonModule],
  entryComponents: [ButtonComponent, ButtonGroupComponent]
})
export class ButtonsModule {
  constructor(private injector: Injector) {
    const buttonElement = createCustomElement(ButtonComponent, { injector });
    const buttonGroupElement = createCustomElement(ButtonGroupComponent, { injector });

    customElements.define('cns-button', buttonElement);
    customElements.define('cns-button-group', buttonGroupElement);
  }

  ngDoBootstrap() {}
}
