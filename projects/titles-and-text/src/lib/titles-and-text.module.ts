import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';

import { DisplayComponent } from './components/display/display.component';
import { TitleComponent } from './components/title/title.component';
import { TextComponent } from './components/text/text.component';
import { CaptionComponent } from './components/caption/caption.component';
import { ElementDef } from 'projects/shared/interfaces';
import { RegisterWebComponents } from 'projects/shared/helpers';

const angularElements: ElementDef[] = [
  { key: 'cns-display', component: DisplayComponent },
  { key: 'cns-title', component: TitleComponent },
  { key: 'cns-text', component: TextComponent },
  { key: 'cns-caption', component: CaptionComponent }
];

@NgModule({
  declarations: [angularElements.map(element => element.component)],
  imports: [CommonModule],
  entryComponents: [angularElements.map(element => element.component)]
})
export class TitlesAndTextModule {
  constructor(private injector: Injector) {
    RegisterWebComponents(angularElements, injector);
  }

  ngDoBootstrap() {}
}
