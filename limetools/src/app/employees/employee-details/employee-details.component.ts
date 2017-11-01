import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mockList } from '../../shared/mock-data/mock-employees';
import { Employee } from '../../shared/models/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee;
  
  constructor(private route: ActivatedRoute,
              private router: Router) { 
  }

  ngOnInit() {
    console.log('Getting hit');
    //const employeeId = parseInt(this.route.snapshot.params['id']);
    
    this.route.paramMap.subscribe(params => {
      this.employee = mockList.find(e => e.id.toString() === params.get('id'));
      console.log(this.employee);
    }); 
  }

  goBackToEmployees() {
    const routeExpression = ['/employees'];
    this.router.navigate(routeExpression);
  }
}
