export const people = [{
    id: "1",
    name: "Minho",
    age: 22,
    gender: "male",
},
{
    id: "2",
    name: "Juwon",
    age: 22,
    gender: "female",
},
{
    id: "3",
    name: "Nico",
    age: 30,
    gender: "male",
}
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0];
}