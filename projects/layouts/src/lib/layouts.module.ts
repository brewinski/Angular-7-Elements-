import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TitlesAndTextModule } from '../../../titles-and-text/src/public_api';
import { ArticleComponent } from './components/article/article.component';
import { CommonModule } from '@angular/common';
import { CalloutCardComponent } from './components/callout-card/callout-card.component';
import { RegisterWebComponents } from '../../../shared/helpers';



const angularElements: any[] = [
  { key: 'cns-article', component: ArticleComponent },
  { key: 'cns-callout-card', component: CalloutCardComponent }
];

@NgModule({
  declarations: [angularElements.map(elementDef => elementDef.component)],
  imports: [CommonModule, TitlesAndTextModule],
  entryComponents: [angularElements.map(elementDef => elementDef.component)],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutsModule {
  constructor(private injector: Injector) {
    RegisterWebComponents(angularElements, injector);
  }

  ngDoBootstrap() {}
}
