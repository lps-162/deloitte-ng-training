import { Employee } from "../models/employee";

export let mockList: Employee[] = [];

let emp1 = new Employee(1, 'LP Shivan', 'Venkat', 'Tokyo');
mockList.push(emp1);
let emp2 = new Employee(2, 'Ki', 'Shamo', 'Tokyo');
mockList.push(emp2);
let emp3 = new Employee(3, 'Chen', 'Shangh', 'Tokyo');
mockList.push(emp3);


