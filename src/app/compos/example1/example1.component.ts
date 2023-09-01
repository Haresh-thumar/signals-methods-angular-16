import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.scss']
})
export class Example1Component {

  items = [{ name: 'Product A', price: 10 }, { name: 'Product B', price: 15 }, { name: 'Product C', price: 20 },];

  // Define a signal for the list of items
  itemList = signal(this.items);

  // Define a computed value for the total price
  totalPrice = computed(() => {
    return this.itemList().reduce((acc, curr) => acc + curr.price, 0);
  });

  removeItem(item: any) {
    // Update the itemList signal by removing the selected item
    this.itemList.set(this.itemList().filter((i) => i !== item));
  }

}
