import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MadeWithLoveModule } from 'made-with-love';
import { BannerTestModule } from 'banner-test';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [ BrowserModule, MadeWithLoveModule, BannerTestModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
