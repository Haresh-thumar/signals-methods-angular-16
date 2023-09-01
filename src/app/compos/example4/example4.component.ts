import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-example4',
  templateUrl: './example4.component.html',
  styleUrls: ['./example4.component.scss']
})
export class Example4Component {

  constructor() {
    // Effect to log the filtered todos and remaining count whenever they change
    effect(() => {
      console.log('Filtered Todos:');
      console.log(this.filteredTodos());
      console.log(`Remaining Todos: ${this.remainingTodosCount()}`);
    });
  }

  // Writable signals
  todos = signal([
    { id: 1, title: 'Buy groceries', completed: false },
    { id: 2, title: 'Do laundry', completed: true },
    { id: 3, title: 'Walk the dog', completed: false }
  ]); // List of todos

  showCompleted = signal(false); // Flag indicating whether completed todos should be shown

  // Computed signal to filter and sort todos based on the showCompleted flag
  filteredTodos = computed(() => {
    const filtered = this.todos().filter(todo => this.showCompleted() || !todo.completed);
    return filtered.sort((a, b) => a.id - b.id);
  });

  // Computed signal to count the number of remaining todos
  remainingTodosCount = computed(() =>
    this.todos().reduce((count: any, todo: any) => (todo.completed ? count : count + 1), 0)
  );

  ngOnInit(): void {
    // Update the values of the writable signals
    this.todos.mutate((value: any) => {
      value.push({ id: 4, title: 'Clean the house', completed: false });
      value[1].completed = false;
    });

    // Update the showCompleted flag
    this.showCompleted.set(true);
  }



}
