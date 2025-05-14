// * in arrays

// REST Operator
function addNumbers(a, b, ...other) {
  // Used as rest -> combiens all the numbers into a array
  const arr = other;
  console.log(arr[0]);

  console.log(a + b + arr[1]);
}

addNumbers(2, 6, 7, 8, 9, 11, 12, 14);

//  SPREAD Operator

var names = ["Raju", "Alex", "Mahak", "Rex"];

const nums = [...names];
console.log(nums);

function getNames(n1, n2, n3, n4) {
  console.table([n1, n2, n3, n4]);
}

getNames(...nums); // spreading the names -> spreads the elements of the array

// * in Objects

const obj = {
  name: "Amit",
  age: 21,
  company: "Google",
  hobbies: ["Cricket", "Gaming"],
};

// const age = obj.age;
// console.log(age);

const { age, ...x } = obj;
console.table([age]);
console.log(x);

// Spread

const newObj = {
  ...obj,
  age: 29,
};
console.log(newObj);

/*
Differences Between Spread and Rest
Spread: Expands elements into individual elements. Used in array/object literals, function calls, etc.
Rest: Collects multiple elements and packs them into an array or object. Used in function parameters and destructuring.
*/

// Practice
var names = ["Ajay", "Raj", "Alex"];

function getNames(name1, name2, name3) {
  console.table([name1, name2, name3]);
}

getNames(...names);
