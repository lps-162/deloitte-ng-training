import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/models/employee';
import { mockList } from '../shared/mock-data/mock-employees';

@Component({
  selector: 'app-employees',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  title: string;
  selectedEmployee: Employee;
  listOfEmployees: Employee[] = mockList;
  myAddressObj: string;

  constructor() { }

  ngOnInit() {

    this.title = 'Employee Details';

  }

  submitEmployee() {
    console.log(this.selectedEmployee);
  }

  showEmployee(localEmp) {
    console.log(localEmp);
    this.selectedEmployee = localEmp;
    this.myAddressObj = 'Hyderabad';
  }

  handleEmployeeCreation(newEmployee: Employee) {
    console.log('Coming from child component');
    console.log(newEmployee);
    this.listOfEmployees.push(newEmployee);
    this.selectedEmployee = newEmployee;
  }

}
