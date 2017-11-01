import { Component, OnInit } from '@angular/core';
import { mockList } from '../../shared/mock-data/mock-employees';
import { Employee } from '../../shared/models/employee';
import { Http } from '@angular/http';
import { EmployeesService } from '../../shared/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  listOfEmployees: Employee[];
  
  constructor(private empService: EmployeesService) { }

  ngOnInit() {

    this.empService.getEmployees()
            .subscribe((employees) => {
              this.listOfEmployees = employees;
              console.log(employees);
            });
  }

}
