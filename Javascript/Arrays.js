// Creation
const arr = new Array("Apple", "Mango", "Grapes");
console.log(arr);

//* Array Methods

// length
console.log(arr.length);

// * Addition
// push
arr.push("Coconut");

// unshift -> adds element to the beginning
arr.unshift("Banana");

// * Removing
// pop -> removes last element and returns that element
const l = arr.pop();
console.log(l);

// shift -> removes teh first element and returns the element
const b = arr.shift();
console.log(b);

// Methods

console.log(arr.length); // length

const extra = ["Guava", "Papaya"];
const all = arr.concat(extra); // concat
console.log(all);

const n1 = arr.join("-");
console.log(n1);

const n2 = arr.slice(1, 3);
console.log(n2);

//* Extra Methods

arr.sort();
console.log(arr);

const ans1 = arr.find((x) => x.startsWith("A"));
console.log(ans1);

// * Testing
const ans = arr.every((x) => x.startsWith("A"));
console.log(ans); // true/false

const ans2 = arr.some((x) => x.startsWith("A"));
console.log(ans2); // true / false
