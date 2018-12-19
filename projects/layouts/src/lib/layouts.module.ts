import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { TitlesAndTextModule } from '../../../titles-and-text/src/public_api';
import { LayoutsComponent } from './layouts.component';
import { ArticleComponent } from './components/article/article.component';
import { CommonModule } from '@angular/common';

interface ElementDef {
  key: string;
  component: any;
}

const angularElements: ElementDef[] = [
  { key: 'cns-article', component: ArticleComponent }
];

@NgModule({
  declarations: [ArticleComponent],
  imports: [CommonModule, TitlesAndTextModule],
  entryComponents: [angularElements.map(elementDef => elementDef.component)],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutsModule {
  constructor(private injector: Injector) {
    angularElements.forEach(element => {
      const newElement = createCustomElement(element.component, { injector });
      customElements.define(element.key, newElement);
    });
  }

  ngDoBootstrap() {}
}
