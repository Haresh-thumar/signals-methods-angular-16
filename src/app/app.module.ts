import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Compo1Component } from './compos/compo1/compo1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Compo2Component } from './compos/compo2/compo2.component';
import { Compo3Component } from './compos/compo3/compo3.component';
import { Compo4Component } from './compos/compo4/compo4.component';
import { Example1Component } from './compos/example1/example1.component';
import { Example2Component } from './compos/example2/example2.component';
import { Example3Component } from './compos/example3/example3.component';
import { Example4Component } from './compos/example4/example4.component';
import { Example5Component } from './compos/example5/example5.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    Compo1Component,
    Compo2Component,
    Compo3Component,
    Compo4Component,
    Example1Component,
    Example2Component,
    Example3Component,
    Example4Component,
    Example5Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
