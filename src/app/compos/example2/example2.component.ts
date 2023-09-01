import { HttpClient } from '@angular/common/http';
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.scss']
})
export class Example2Component {

  constructor(private http: HttpClient) { }

  listItem = signal<any>([]);

  // Define a signal for the loading state
  loading = signal(true);

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((data) => {
      this.loading.set(false);
      this.listItem.set(data as any);
    });
  }

  isLoading() {
    return this.loading();
  }

}
