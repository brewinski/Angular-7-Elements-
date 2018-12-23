import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ArticleComponent } from './components/article/article.component';
import { CommonModule } from '@angular/common';
import { CalloutCardComponent } from './components/callout-card/callout-card.component';
import { RegisterWebComponents } from '../../../shared/helpers';
import { BlockComponent } from './components/block/block.component';

const angularElements: any[] = [
  { key: 'cns-article', component: ArticleComponent },
  { key: 'cns-callout-card', component: CalloutCardComponent },
  { key: 'cns-block', component: BlockComponent }
];

@NgModule({
  declarations: [ArticleComponent, BlockComponent, CalloutCardComponent],
  imports: [CommonModule],
  entryComponents: [ArticleComponent, BlockComponent, CalloutCardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutsModule {
  constructor(private injector: Injector) {
    RegisterWebComponents(angularElements, injector);
  }
}
