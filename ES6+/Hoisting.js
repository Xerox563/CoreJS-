/*  Hoisting is Phenomena in Js by which you can access these variables and functions even before you initialised it (or put some value in it).
-> Hoisting in JavaScript is a behavior in which variable and function declarations are moved to the top of their scope before code execution.
-> However, only the declarations are hoisted — not the initializations.
-> Function declarations are fully hoisted, meaning they can be called before they appear in the code. 
-> solutuion lies in the creation phase (where memmory is allocated ).
*/
getAge(); // undefined (treats arrow funtion as variables(var).)
getName(); // prints -> Amit Gangwar
console.log(x); // undefined
console.log(y); // error -> not defined (as y is not present in the code so it cants reserve memory for that also as it cant find in code so throws error that y is not defined .(y not present in memory) )
var x = 7;
function getName() {
  console.log("Amit Gangwar");
}

// Arrow Functions behave like varaibles
var getAge = () => {
  console.log("26");
};

// This type of Functions declarations also behaves like var(variables.)
var getName2 = function () {
  console.log("This is Raju !!");
};

// Key Points (To Remember)
/*

 * Hoisted means -> Js knows They exists before it starts runnign the code .
 * Function declarations are fully hoisted, meaning they can be called before they appear in the code.
 * var declarations are hoisted but initialized with undefined, so they can be accessed before but we get the undefined .
 * let and const declarations are hoisted but not initialized creating the Temporal Dead Zone from start of the scope until teh declaration is encountered .
 * Accessing (let and const ) before their declaration results in reference error.
 * TDZ -> Period where the variable exists but hasnt been given a value yet is called Temporal Dead Zone.
 */

console.log(myVar); // ReferenceError: Cannot access 'myVar' before initialization
let myVar = 10; // same for const

/* Here, myVar exists in memory when the code starts, but you can’t access it until 
   after the let myVar = 10; line. The time from the start of the scope to that line is the TDZ for myVar. */
