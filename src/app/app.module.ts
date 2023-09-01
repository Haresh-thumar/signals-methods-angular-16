import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Compo1Component } from './compos/compo1/compo1.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Compo2Component } from './compos/compo2/compo2.component';
import { Compo3Component } from './compos/compo3/compo3.component';
import { Compo4Component } from './compos/compo4/compo4.component';

@NgModule({
  declarations: [
    AppComponent,
    Compo1Component,
    Compo2Component,
    Compo3Component,
    Compo4Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
