import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MadeWithLoveModule } from '../../projects/made-with-love/src/public_api';
import { ButtonsModule } from '../../projects/buttons/src/public_api';
import { FormModule } from '../../projects/form/src/public_api';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {
    path: 'buttons',
    component: ButtonsComponent,
    data: { title: 'wassup' }
  }
];

@NgModule({
  declarations: [AppComponent, ButtonsComponent],
  imports: [
    BrowserModule,
    MadeWithLoveModule,
    ButtonsModule,
    FormModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    FormBuilder
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
