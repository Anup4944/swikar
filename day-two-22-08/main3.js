// HIGH ORDER FUNCTIONS

// function addingOne(numbers) {
//   let result = [];
//   for (i = 0; i < numbers.length; i++) {
//     result = [...result, numbers[i] + 1];
//   }
//   return result;
// }

// const arr = [2, 3, 4, 5];

// // console.log(addingOne(arr));

// INMUTABLE FUNCTIONS map filter find etc

// MAP

// console.log(
//   arr.map((i) => {
//     return i + 1;
//   })
// );

// FILTER

// const people = [
//   { name: "John Doe", address: "123 Main St, Springfield", age: 28 },
//   { name: "Jane Smith", address: "456 Oak Ave, Metropolis", age: 21 },
//   { name: "Alice Johnson", address: "789 Pine Ln, Gotham", age: 22 },
//   { name: "Bob Brown", address: "101 Maple St, Star City", age: 13 },
//   { name: "Carol White", address: "202 Elm Rd, Central City", age: 6 },
// ];

// const adults = people.filter((i) => i.age > 18);

// console.log(adults);

// FIND

// const users = [
//   { name: "John Doe", email: "johndoe@example.com", age: 28 },
//   { name: "Jane Smith", email: "janesmith@example.com", age: 34 },
//   { name: "Alice Johnson", email: "alicejohnson@example.com", age: 22 },
//   { name: "Bob Brown", email: "bobbrown@example.com", age: 45 },
//   { name: "Carol White", email: "carolwhite@example.com", age: 29 },
// ];

// const ageFourty = users.find((item) => item.age === 28);

// console.log(ageFourty);

// const users = [
//   { name: "John Doe", email: "johndoe@example.com", age: 28 },
//   { name: "Jane Smith", email: "janesmith@example.com", age: 34 },
//   { name: "Alice Johnson", email: "alicejohnson@example.com", age: 22 },
//   { name: "Bob Brown", email: "bobbrown@example.com", age: 45 },
//   { name: "Carol White", email: "carolwhite@example.com", age: 29 },
// ];

// MUTABLE FUNCTIONS, POP AND PUSH

const num = [1, 2, 3, 4, 5, 6, 7];

num.push(11); // push to add from last

console.log(num);
