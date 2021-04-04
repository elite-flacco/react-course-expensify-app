// console.log('destructuring');

// const person = {
//     name: 'shuang',
//     age: 34,
//     location: {
//         city: 'nyc',
//         temp: 9
//     }
// }

// const { name = 'jane doe', age } = person;
// const { city, temp: temperature } = person.location;
// // console.log(`${person.name} is ${person.age}`)
// console.log(`${name} is ${age}`);
// console.log(`it's ${temperature} in ${city}`);

// const book = {
//     title: 'ego is the enemy',
//     author: 'ryan holiday',
//     publisher: {
//         name: 'penguin'
//     }
// }

// const { title, author } = book;

// const { name: publisherName = 'self published' } = book.publisher;
// console.log(publisherName);

// const address = ['1greene', 'jersey city','nj','07302'];

// const [street, city, state = 'new york'] = address;

// console.log(`you are in ${street}, ${city}, ${state}`);

const item = ['americano', '$2.00', '$2.50', '$3.00'];
const [coffee, , medium] = item;
console.log(`a medium ${coffee} costs ${medium}`);