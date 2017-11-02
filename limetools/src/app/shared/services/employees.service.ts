import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Employee } from '../models/employee';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class EmployeesService {
  baseUrl = 'http://localhost:3000/api/employees';

  constructor(private http: Http) { }

  getEmployees() {
    return this.http.get(this.baseUrl)
                    .map(res => res.json())
                    .catch(this.handleError);
  }

  getEmployeeById(id: number) {
    const fetchUrl = `${this.baseUrl}/${id}`;

    const empObservable$ = this.http.get(fetchUrl)
                              .map(res => res.json())
                              .catch(this.handleError);

    return empObservable$ as Observable<Employee>;
  }

  createEmployee(employee: Employee) {
    return this.http.post(this.baseUrl, employee)
            .map(res => res.json())
            .catch(this.handleError);
  }

  private handleError(err) {
    console.log(err);
    const errorMessage: string = err.status + ' : ' + err.json().error.message;
    return Observable.throw(errorMessage);
  }
  
}
