import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-example3',
  templateUrl: './example3.component.html',
  styleUrls: ['./example3.component.scss']
})
export class Example3Component {

  // Writable signals
  firstName = signal('John');
  lastName = signal('Doe');
  age = signal(30);

  // Computed signal to calculate the full name
  fullName = computed(() => `${this.firstName()} ${this.lastName()}`);

  // Computed signal to determine if the person is an adult
  isAdult = computed(() => this.age() >= 18);

  constructor() {
    // Effect to log the full name and adult status whenever any of the signals change
    effect(() => {
      console.log(`Full Name: ${this.fullName()}`);
      console.log(`Is Adult: ${this.isAdult()}`);
    });
  }

  ngOnInit(): void {
    // Update the values of the writable signals
    this.firstName.set('Jane');
    this.lastName.set('Smith');
    this.age.set(25);
  }



}
