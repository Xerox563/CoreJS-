/* 
 * What is Debouncing ?
To avoid unwanted network api calls we use debouncing .
So hum Vo debounce function is tareekae sae likhtae hain ki vo function ek particular time kae baad call ho .
Har press pr function call na ho kuch jb vo press kr dae kuch ms kae baad functiom call ho .
Debouncing is a way of delaying the execution of a function until a certain amount of time has passed since the last time it was called.
This can be useful for scenarios where we want to avoid unnecessary or repeated function calls that might be expensive or time-consuming.

-> For example, imagine we have a search box that shows suggestions as the user types. If we call a function to fetch suggestions on every keystroke,
 we might end up making too many requests to the server, which can slow down the application and waste resources. 
 Instead, we can use debouncing to wait until the user has stopped typing for a while before making the request.

*/
let cnt = 0;
function getData() {
  console.log("fetching data", cnt++);
}

function myDebounce(call, d) {
  let timer;
  return function (...args) {
    // Reset timer if the user types within the debounce period -> If a previous setTimeout is still active, it clears it, so the previous call won’t execute.
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      // Assign setTimeout to timer
      call(...args); // Pass arguments to the call function
    }, d);
  };
}

const betterFunction = myDebounce(getData, 1000);

document.getElementById("search").addEventListener("input", () => {
  betterFunction();
});
