
import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';

import { MadeWithLoveComponent } from './components/made-with-love/made-with-love.component';
import { TestComponent } from './components/test/test.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MadeWithLoveComponent, TestComponent],
  entryComponents: [MadeWithLoveComponent, TestComponent]
})
export class MadeWithLoveModule {
  constructor(private injector: Injector) {
    const madeWithLoveElement = createCustomElement(MadeWithLoveComponent, { injector });
    customElements.define('made-with-love', madeWithLoveElement);

    const testElement = createCustomElement(TestComponent, { injector });
    customElements.define('test', testElement);
  }

  ngDoBootstrap() {}
}
