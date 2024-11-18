/* // Anonyomous function:
-> Function that does have a name attached to it.
-> They are Often Used as a callback function.
const sayHello = function () {
  console.log("Hello!");
};
sayHello();

:: IIFE
(function (x) {
  console.log("IIFE !!", x);
})(6);   

*/

// * Closures
/*
 * A closure is a feature in javscript where an inner function has access to variables from its outer function , even after the outer function has finished executing .
 * This makes it possible for the inner function to "remember" the enviornment in which it was created .
 * Closures are powerful because they let functions remember data (like greeting and name) without needing to pass those values around every time
 */
var sum = function (a) {
  console.log("Live Viewers !! : ", a);
  const c = 4;
  return function add(b) {
    console.log(a + b + c);
    return function Multiply(d) {
      return a * b * c * d;
    };
  };
};

const x = sum(22);
const y = x(5);
const z = y(8);
console.log(z);

// ek baar function call ho jaaye toh value retain rehti hain lost nhi hoti.
