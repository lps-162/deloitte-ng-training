import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Employee } from '../shared/models/employee';


@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  newEmployee: Employee = new Employee('', '', '');
  @Output() employeeCreated = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  createEmployee() {
    // console.log('Submitted');
    // console.log(this.newEmployee);
    this.employeeCreated.emit(this.newEmployee);
  }
}
