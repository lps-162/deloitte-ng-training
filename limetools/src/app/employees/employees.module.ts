import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeesSectionComponent } from './employees-section/employees-section.component';
import { FormsModule } from '@angular/forms';
import { employeesRouting } from './employees.routing';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    employeesRouting
  ],
  declarations: [
    EmployeesListComponent,
    EmployeeDetailsComponent,
    EmployeeCreateComponent,
    EmployeesSectionComponent
  ]
})
export class EmployeesModule { }
