import { Component, effect, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-compo4',
  templateUrl: './compo4.component.html',
  styleUrls: ['./compo4.component.scss']
})
export class Compo4Component {

  /*--------------------------------------------------------------------------------------------------
                                          Signals (Mutate)
---------------------------------------------------------------------------------------------------*/

  /*--------------------------------------------------------
                    Modify Array Elements
  ---------------------------------------------------------*/
  constructor(private fb: FormBuilder) { }

  employeeForm!: FormGroup;

  employees = signal<AryData[]>([
    { name: 'John Smith', position: 'Manager', department: 'sales' },
    { name: 'Jane Doe', position: 'Engineer', department: 'Engineering' },
    { name: 'Bob Johnson', position: 'Marketing Specialist', department: 'Marketing' },
    { name: 'Sarah Lee', position: 'HR Manager', department: 'Human Resources' },
    { name: 'Michael Brown', position: 'IT Group', department: 'IT' },
  ])

  empAdding = signal<boolean>(false);

  toggleAddBlock() {
    this.empAdding.update(status => !status);
  }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      position: ['', Validators.required],
      department: ['', Validators.required],
    });
  }

  onSubmit() {
    // console.log(this.employeeForm.value);
    this.employees.mutate(emplist => {
      emplist.push(this.employeeForm.value);
    });
  }


  /*--------------------------------------------------------
                     Modify Object Properties
   ---------------------------------------------------------*/
  product = signal({
    name: 'Laptop',
    category: 'Electronics',
    price: 2000,
    rating: 4.5,
  });

  changeProductName() {
    this.product.mutate(product => {
      product.name = 'Mobile'
    });
  }

  sideEffect = effect(() => this.saveProductDatatoAPI(this.product()));

  saveProductDatatoAPI(product: any) {
    console.log('Call Api with product Data: ' + JSON.stringify(product));
  }



  // employeesdd = signal<number[]>([1, 2, 3]);
  // employeesdngf = signal<string[]>(['aaa', 'bbb', 'ccc', 'ddd']);
  // employeesdf = signal<any>({ name: 'haresh', age: 15, eligible: false });
}




export class AryData {
  name!: string;
  position!: string;
  department!: string;
}