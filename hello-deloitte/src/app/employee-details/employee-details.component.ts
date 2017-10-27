import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../shared/models/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  @Input('emp') employee: Employee;
  @Input('addr') address: string;

  constructor() { }

  ngOnInit() {
  }

}
