const employees = [
    {
        id: 1,
        firstName: 'Alexandra',
        lastName: 'Daddario',
        city: 'Los Angeles'
    },
    {
        id: 2,
        firstName: 'Rock Dwayne',
        lastName: 'Johnson',
        city: 'Las Vegas'
    },
    {
        id: 3,
        firstName: 'Deepika',
        lastName: 'Padukone',
        city: 'Hyderabad'
    },
    {
        id: 2,
        firstName: 'Deepika',
        lastName: 'Padukone',
        city: 'Hyderabad'
    }
];

const favEmployee = employees.find(e => e.id === 2);

console.log(favEmployee);
