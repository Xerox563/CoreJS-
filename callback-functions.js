/* 
  Callback function in javascript
* functions are first class citizens in js 
* We can pass these functions to other functions when we do so the function which we passed into another function is called callback fucntion.
* Js is a synchronous single threaded language -> It means it can do single task at a time and in a particular order .
* Due to callback we can do many async things inside js.
* Js has been call stack(main thread) so everything taht is executed inside ur js page is executed with the call stack.
* So if any operation bloeck sthe call stack that means blocking the main thread .
* Since js has only one call call stack(main thread) if one tasks takes 30 sec or more no other task can be able to execute through it.Everything else be blocked
* Thats why we should never block our main thread . We should always use async operations for things that takes time .
*/

setTimeout(() => {
  // console.log("timer");
}, 5000);
function x(y) {
  //console.log("x");
  y();
}

// calling and passing y func in x
x(function y() {
  // console.log("y");
});

//* Adding Event Listener

document.getElementById("clickMe").addEventListener("click", () => {
  // During clicking of the button callback fucntion is executed -> goes in call stack
  //console.log("Button Clicked !!");
});

//* Event Listener with closure

function attachEL() {
  let cnt = 0;
  document.getElementById("clickMe").addEventListener("click", () => {
    console.log("Button Clicked !!", ++cnt);
  });
}

attachEL();

//* Remove Event Listeners -> heavy as they takes memory .

const handleClick = () => {
  console.log("Remove Button Clicked");
};
// adding
const button = document.getElementById("clickno");
button.addEventListener("click", handleClick);

// removing
button.removeEventListener("click", handleClick);
