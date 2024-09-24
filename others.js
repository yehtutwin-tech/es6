// Default Parameter
// function add(a, b) {
//   return a + b
// }
// console.log(add(1));

// function add(a, b = 0) {
//   return a + b
// }
// console.log(add(1));

// Rest Parameter
// function add(a, b, ...c) {
//   return c;
// }
// // [3, 4, 5]
// console.log(add(1, 2, 3, 4, 5));

// Spread Operator
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let result = [arr1, arr2];
// // [[1, 2, 3], [4, 5, 6]]
// console.log(result);

// let result = [...arr1, ...arr2];
// // [1, 2, 3, 4, 5, 6]
// console.log(result);

// let fruits = ['apple', 'banana'];
// // let apple = fruits[0];
// // let banana = fruits[1];

// let [apple, banana] = fruits;

// let user = {name: 'Mg Mg', age: 20};
// // let name = user.name;
// // let age = user.age;

// let {name, age} = user;
// console.log(name, age)

// Porperty Shorthand

let name = 'Mg Mg';
let age = 20;

// before
// let user = {
//   name: name,
//   age: age,
//   say: function() {
//     return 'Helo';
//   }
// }

// after
let user = {
  name,
  age,
  say() {
    return 'Hello';
  }
}

// Tralling Comma
let users = [
  { name: 'Mg Mg', age: 20 },
  { name: 'Ko Ko', age: 20 },
  { name: 'Susus', age: 20 },
];

// code refectoring
// dry
