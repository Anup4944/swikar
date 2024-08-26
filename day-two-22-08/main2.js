// FUNCTIONS

// function getUrl(email, name) {
//   console.log(arguments);
// }

// getUrl("anup@gmail.com", "Anup");

// // arrow function
// const getUrl = () => {
//   console.log("get url");
// };

// First difference, old function ma arguments aafai huncha, arrow fun le this bind gardaina, instead window lai point garcha
// second diff, arrow fun ma this. garera user to property access garna mildaina

// const user = {
//   name: "Anup",
//   age: 25,
//   getLocation: () => {
//     return this;
//   },
// };

// console.log(user.getLocation());

// THIRD difference, hoisting lai old function le support garcha, tara arrow function lai gardaina

// getName();

// function getName() {
//   console.log("hoisting");
// }
// const getName = () => {
//   console.log("hoisting");
// };

// Explicit and imexplicit, old ma return chahincha tara arrow ma return na lekhda ni huncha

// TEMPELETE LITERALS

// const name = "A 'n' up";

// console.log(name);

// SPREAD OPERATOR IN ARRAY

// const arr = [2, 4, 6, 8, 10];

// const arr2 = [3, 5, 7, 9, 11];

// const newArr = [...arr, ...arr2];

// console.log(newArr);

// SPREAD OPERATOR IN OBJECTS

// const user = { name: "Anup", age: 26 };

// const location = { state: "NSW", postCode: 2216 };

// const addUp = { ...user, ...location };

// console.log(addUp);

// REST OPERATOR, rest operatoe le baki use nabhako property lai lincha

// const addUp = { ...user, ...location };

// const { name, state, ...rest } = addUp;

// console.log(name, state, rest);
