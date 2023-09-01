import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-compo3',
  templateUrl: './compo3.component.html',
  styleUrls: ['./compo3.component.scss']
})
export class Compo3Component {


  /*--------------------------------------------------------------------------------------------------- 
                                            Signals (Updated)
  ---------------------------------------------------------------------------------------------------*/
  qty = signal<number>(5);
  onDecreaseQty() {
    this.qty.update(a => a - 1);
  }
  onIncreaseQty() {
    this.qty.update(b => b + 1);
  }

}
