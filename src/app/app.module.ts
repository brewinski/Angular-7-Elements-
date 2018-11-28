import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MadeWithLoveModule } from 'made-with-love';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [ BrowserModule, MadeWithLoveModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
