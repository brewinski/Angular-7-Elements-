import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MadeWithLoveModule } from '../../projects/made-with-love/src/public_api';
import { ButtonsModule } from '../../projects/buttons/src/public_api';
import { FormModule } from '../../projects/form/src/public_api';
import { TitlesAndTextModule } from '../../projects/titles-and-text/src/public_api';
import { LayoutsModule } from '../../projects/layouts/src/public_api';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TitlesAndTextComponent } from './titles-and-text/titles-and-text.component';
import { ArticleLayoutComponent } from './article-layout/article-layout.component';
import { TextInputComponent } from './form/text-input/text-input.component';
import { CalloutCardComponent } from './projects/layouts/src/lib/components/callout-card/callout-card.component';

const appRoutes: Routes = [
  {
    path: 'buttons',
    component: ButtonsComponent,
  },
  {
    path: 'text-input',
    component: TextInputComponent,
  },
  {
    path: 'titles-and-text',
    component: TitlesAndTextComponent,
  },
  {
    path: 'article-layout',
    component: ArticleLayoutComponent
  }
];

@NgModule({
  declarations: [AppComponent, ButtonsComponent, TitlesAndTextComponent, ArticleLayoutComponent, TextInputComponent, CalloutCardComponent],
  imports: [
    BrowserModule,
    MadeWithLoveModule,
    ButtonsModule,
    FormModule,
    FormsModule,
    ReactiveFormsModule,
    TitlesAndTextModule,
    LayoutsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [
    FormBuilder
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
