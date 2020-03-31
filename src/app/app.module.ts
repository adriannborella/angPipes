import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common';
import localEs from "@angular/common/locales/es";
import localEn from "@angular/common/locales/en";

registerLocaleData(localEs, 'es');
registerLocaleData(localEn, 'en');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
