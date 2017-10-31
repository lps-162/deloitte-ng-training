import { EmployeesListComponent } from "./employees-list/employees-list.component";

import { RouterModule, Routes, Route } from '@angular/router';
import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";
import { EmployeeCreateComponent } from "./employee-create/employee-create.component";
import { EmployeesSectionComponent } from "./employees-section/employees-section.component";
import { ModuleWithProviders } from "@angular/core";

const routes: Routes = [
    {
        path: 'employees',
        component: EmployeesSectionComponent,
        children: [
            {
                path: '',
                component: EmployeesListComponent
            },
            {
                path: 'create',
                component: EmployeeCreateComponent
            },
            {
                path: ':id',
                component: EmployeeDetailsComponent
            },
        ]
    }
];

export const employeesRouting: ModuleWithProviders = RouterModule.forRoot(routes);