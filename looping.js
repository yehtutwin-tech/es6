// for, while, do...while, foreach

// // .map()
// let nums = [1, 2, 3, 4];
// let result = nums.map((num, index) => {
//   // console.log(num);
//   console.log(index, num);
//   return num + 2;
// });
// // [2, 3, 4, 5]
// console.log(result);

// // .filter()
// let nums = [1, 2, 3, 4];
// let result = nums.filter(num => {
//   return !(num % 2);
// });
// // [1, 3]
// console.log(result);

// // .reduce()
// let nums = [1, 2, 3, 4];
// let result = nums.reduce((sum, num) => {
//   return sum + num;
//   // 0 + 1 = 1 (sum)
//   // 1 + 2 = 3 (sum)
//   // 3 + 3 = 6 (sum)
//   // 6 + 4 = 10 (sum)
//   // 10
// }, 0);
// // 10
// console.log(result);

// .find()
let students = [
  {id: 1, name: 'mg mg', age: 15},
  {id: 2, name: 'ko ko', age: 20},
];
let student = students.find(student => student.id === 1);
console.log(student);


