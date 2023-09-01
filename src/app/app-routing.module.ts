import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Compo1Component } from './compos/compo1/compo1.component';
import { Compo2Component } from './compos/compo2/compo2.component';
import { Compo3Component } from './compos/compo3/compo3.component';
import { Compo4Component } from './compos/compo4/compo4.component';
import { Example1Component } from './compos/example1/example1.component';
import { Example2Component } from './compos/example2/example2.component';
import { Example3Component } from './compos/example3/example3.component';
import { Example4Component } from './compos/example4/example4.component';
import { Example5Component } from './compos/example5/example5.component';

const routes: Routes = [
  { path: 'compo1', component: Compo1Component },
  { path: 'compo2', component: Compo2Component },
  { path: 'compo3', component: Compo3Component },
  { path: 'compo4', component: Compo4Component },
  { path: 'example1', component: Example1Component },
  { path: 'example2', component: Example2Component },
  { path: 'example3', component: Example3Component },
  { path: 'example4', component: Example4Component },
  { path: 'example5', component: Example5Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
