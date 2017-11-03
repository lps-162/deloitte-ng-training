import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../shared/models/employee';
import { EmployeesService } from '../../shared/services/employees.service';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee;
  errorMessage: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: EmployeesService) { 
  }

  ngOnInit() {
    console.log('Getting hit');
    //const employeeId = parseInt(this.route.snapshot.params['id']);

    this.route.paramMap.subscribe(params => {
      const empId: number = parseInt(params.get('id'));
      this.service.getEmployeeById(empId)
              .subscribe(employee => this.employee = employee,
                         err => this.errorMessage = err);
                
    }); 
  }

  goBackToEmployees() {
    const routeExpression = ['/employees'];
    this.router.navigate(routeExpression);
  }
}
