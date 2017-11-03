class Employee {
    firstName: string;
    lastName: string;
    city: string;

    constructor() {
        this.firstName = 'sample';
        this.lastName = 'sample';
        this.city = 'sample';
    }
}

let emp1 = new Employee();

console.log(emp1);