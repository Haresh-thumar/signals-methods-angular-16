import { Component } from '@angular/core';

@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.scss']
})
export class Compo1Component {

  /*------------------------------------------------------------------------------------------------- 
                                            Normal Property
  -------------------------------------------------------------------------------------------------*/
  firstName1: string = 'Haresh';
  lastName1: string = 'Thumar';
  fullName1: string = this.firstName1 + ' ' + this.lastName1;

  changeFirstName(fname1: any) {
    this.firstName1 = fname1;
  }
  changeLastName(lname1: any) {
    this.lastName1 = lname1;
  }

}




// https://byrayray.dev/posts/2023-06-21-how-to-use-angular-signals