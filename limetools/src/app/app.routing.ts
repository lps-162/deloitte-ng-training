import { HomeComponent } from "./home/home.component";
import { EmployeesListComponent } from "./employees/employees-list/employees-list.component";
import { AboutComponent } from "./about/about.component";

import { RouterModule, Routes, Route } from '@angular/router';
import { NotFoundComponent } from "./not-found/not-found.component";
import { ModuleWithProviders } from "@angular/core";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    // {
    //     path: 'employees',
    //     component: EmployeesListComponent
    // },
    // {
    //     path: 'employees/create',
    //     component: EmployeeCreateComponent
    // },
    // {
    //     path: 'employees/:id',
    //     component: EmployeeDetailsComponent
    // },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes);