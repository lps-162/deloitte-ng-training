import { Component, OnInit } from '@angular/core';
import { Employee } from '../../shared/models/employee';
import { EmployeesService } from '../../shared/services/employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  newEmployee: Employee = new Employee('', '', '');
  
  constructor(private service: EmployeesService,
              private router: Router) { }

  ngOnInit() {
  }

  createEmployee() {
    this.service.createEmployee(this.newEmployee)
        .subscribe(employee => {
          this.router.navigate(['/employees']);
        })
  }
}
