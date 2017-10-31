import { HomeComponent } from "./home/home.component";
import { EmployeesListComponent } from "./employees/employees-list/employees-list.component";
import { AboutComponent } from "./about/about.component";

import { RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from "./employees/employee-details/employee-details.component";

const routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'employees',
        component: EmployeesListComponent
    },
    {
        path: 'employees/:id',
        component: EmployeeDetailsComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];

export const appRouting = RouterModule.forRoot(routes);