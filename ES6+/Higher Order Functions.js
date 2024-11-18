/* Higher Order functions
 -> Function that takes one or more functions as arguments or
 -> Returns a function as its result .
 Advantages : 
  - Abstract operations (like transforming, filtering, or combining data).
  - Reuse code for similar tasks without repeating logic.
*/

// * Map
/*
 * It is used to tranform each element in an array and create a new array with those tranformed elements .
 */

const arr = [5, 1, 3, 2, 6];
function double(x) {
  return x * 2;
}
function binary(x) {
  return x.toString(2);
}
const output = arr.map(double);
const bin_output = arr.map(binary);
// Here double function is calls over the each element of the array hence doubling each element.
// console.log(output, bin_output);

// * Filter
/*
 * It returns a new array with only the elements that pass a given condition.
 */

const filter_ele = (x) => {
  return x % 2 == 0;
};
const evens = output.filter(filter_ele);
// console.log(evens);

// * Reduce
// reduce combines all elements in an array into a single result.
// sum,maximum,minimum

// Using Generic Function
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; ++i) {
    sum += arr[i];
  }
  return sum;
}
// console.log(findSum(arr));

// Using Reduce
const result = arr.reduce((accumulator, current) => {
  // this arrow (inner) function iterates(calls) over each element of the array.
  // accumulator -> acculating these values -> sum
  // current -> represents the current values of arr -> arr[i]
  accumulator = accumulator + current;
  return accumulator;
}, 0); // initial value of the accumulator
console.log(result);

// Finding Max

// Using Generic Function
function getMax(arr) {
  let maxi = 0;
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] > maxi) {
      maxi = arr[i];
    }
  }
  return maxi;
}

console.log(getMax(arr));

// Using reduce

const x = arr.reduce((acc, curr) => {
  // acc -> maxi , curr -> arr[i]
  if (curr > acc) {
    acc = curr;
  }
  return acc; // Always return the accumulator ..
}, 0);
console.log(x);
