import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './components/display/display.component';
import { TitleComponent } from './components/title/title.component';
import { TextComponent } from './components/text/text.component';
import { CaptionComponent } from './components/caption/caption.component';
import { ElementDef } from 'projects/shared/interfaces';
import { RegisterWebComponents } from 'projects/shared/helpers';
import { LinksComponent } from './components/links/links.component';

const angularElements: ElementDef[] = [
  { key: 'cns-display', component: DisplayComponent },
  { key: 'cns-title', component: TitleComponent },
  { key: 'cns-text', component: TextComponent },
  { key: 'cns-caption', component: CaptionComponent },
  { key: 'cns-link', component: LinksComponent }
];

@NgModule({
  declarations: [CaptionComponent, DisplayComponent, LinksComponent, TextComponent, TitleComponent],
  imports: [CommonModule],
  entryComponents: [CaptionComponent, DisplayComponent, LinksComponent, TextComponent, TitleComponent]
})
export class TitlesAndTextModule {
  constructor(private injector: Injector) {
    RegisterWebComponents(angularElements, injector);
  }
}
