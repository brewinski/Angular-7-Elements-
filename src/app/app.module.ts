import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MadeWithLoveModule } from '../../projects/made-with-love/src/public_api';
import { ButtonsModule } from '../../projects/buttons/src/public_api';
import { FormModule } from '../../projects/form/src/public_api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MadeWithLoveModule, ButtonsModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
