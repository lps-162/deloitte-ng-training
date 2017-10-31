import { Component, OnInit } from '@angular/core';
import { Employee } from '../../shared/models/employee';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  newEmployee: Employee = new Employee(0, '', '', '');
  
  constructor() { }

  ngOnInit() {
  }

  createEmployee() {

  }
}
