import { Component, OnInit } from '@angular/core';
import { mockList } from '../../shared/mock-data/mock-employees';
import { Employee } from '../../shared/models/employee';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  listOfEmployees: Employee[] = mockList;
  
  constructor() { }

  ngOnInit() {
  }

}
