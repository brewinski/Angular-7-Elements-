import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { BannerTestComponent } from './banner-test.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BannerTestComponent],
  entryComponents: [BannerTestComponent]
})
export class BannerTestModule {
  constructor(private injector: Injector) {
    const bannerTestElement = createCustomElement(BannerTestComponent, { injector });
    customElements.define('banner-test', bannerTestElement);
  }

  ngDoBootstrap() {}
}
