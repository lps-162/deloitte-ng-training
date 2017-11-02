export class Employee {
    id?: number;
    firstName: string;
    lastName: string;
    city: string;

    constructor(firstName: string, lastName: string, city: string) {
        
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
    }
}