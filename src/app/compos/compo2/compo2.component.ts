import { Component, WritableSignal, computed, signal } from '@angular/core';

@Component({
  selector: 'app-compo2',
  templateUrl: './compo2.component.html',
  styleUrls: ['./compo2.component.scss']
})
export class Compo2Component {

  /*-------------------------------------------------------------------------------------------------- 
                                        Signals (Set & Computed)
  --------------------------------------------------------------------------------------------------*/
  firstName2: WritableSignal<string> = signal('Angular');
  lastName2: WritableSignal<string> = signal('TypeScript');
  fullName2 = computed(() => this.firstName2() + ' ' + this.lastName2());

  changeFsName(fname2: any) {
    this.firstName2.set(fname2);
  }
  changeLsName(lname2: any) {
    this.lastName2.set(lname2);
  }

}
