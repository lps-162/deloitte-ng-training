const employee = {
    firstName: 'LP Shivan',
    lastName: 'Venkat',
    city: 'Delhi'
};
let emp2 = { 
    firstName: 'test',
    lastName: 'Venkat',
    city: 'Delhi'
};

employee.firstName = 'DJ Fugan';
employee = emp2;

console.log(employee);
