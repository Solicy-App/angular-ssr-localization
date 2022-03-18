import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompBComponent } from './comp-b/comp-b.component';
import { I18nModule } from './i18n/i18n.module';
import { SelectLanguageComponent } from './select-language/select-language.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectLanguageComponent,
    CompBComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    I18nModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
