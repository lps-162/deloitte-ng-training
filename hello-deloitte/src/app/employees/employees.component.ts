import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/models/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  title: string;
  selectedEmployee: Employee;

  listOfEmployees: Employee[] = [];

  constructor() { }

  ngOnInit() {

    this.title = 'Employee Details';

    let emp1 = new Employee('LP Shivan', 'Venkat', 'Tokyo');
    this.listOfEmployees.push(emp1);
    let emp2 = new Employee('Ki', 'Shamo', 'Tokyo');
    this.listOfEmployees.push(emp2);
    let emp3 = new Employee('Chen', 'Shangh', 'Tokyo');
    this.listOfEmployees.push(emp3);
  }

  submitEmployee() {
    console.log(this.selectedEmployee);
  }

  showEmployee(localEmp) {
    console.log(localEmp);
    this.selectedEmployee = localEmp;
  }
}
