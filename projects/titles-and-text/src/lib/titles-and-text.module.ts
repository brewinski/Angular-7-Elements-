import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';

import { DisplayComponent } from './components/display/display.component';
import { TitleComponent } from './components/title/title.component';
import { TextComponent } from './components/text/text.component';
import { CaptionComponent } from './components/caption/caption.component';

@NgModule({
  declarations: [DisplayComponent, TitleComponent, TextComponent, CaptionComponent],
  imports: [CommonModule],
  entryComponents: [DisplayComponent, TitleComponent, TextComponent, CaptionComponent]
})
export class TitlesAndTextModule {
  constructor(private injector: Injector) {
    const displayElement = createCustomElement(DisplayComponent, { injector });
    const titleElement = createCustomElement(TitleComponent, { injector });
    const textElement = createCustomElement(TextComponent, { injector });
    const captionElement = createCustomElement(CaptionComponent, { injector });

    customElements.define('cns-display', displayElement);
    customElements.define('cns-title', titleElement);
    customElements.define('cns-text', textElement);
    customElements.define('cns-caption', captionElement);
  }

  ngDoBootstrap() {}
}
