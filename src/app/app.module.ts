import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgSelect2Module } from './ng-select2/index';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
		NgSelect2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
