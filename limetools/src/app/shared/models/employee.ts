export class Employee {
    id?: number;
    firstName: string;
    lastName: string;
    city: string;
    fullName: string;

    constructor(firstName: string, lastName: string, city: string) {
        
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.fullName = this.firstName + ' ' + this.lastName;
    }
}