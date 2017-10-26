let employee = {
    firstName: 'LP Shivan',
    lastName: 'Venkat',
    city: 'Hyderabad'

};

let addNumbers = function(a, b) {
    return a + b
}

let multiplyNumbers = function(a, b) {
    return a * b;
}

function demo(operation, a, b) {
    return operation(a, b);
}

let addResult = demo(addNumbers, 'venasdf', 5);
console.log(addResult);
