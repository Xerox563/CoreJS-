/* 
 * What is Throttling ?
 Throttling is a technique that limits how often a function can be called in a given period of time.
 It is useful for improving the performance and responsiveness of web pages that have event listeners
 that trigger heavy or expensive operations, such as animations, scrolling, resizing, fetching data, etc.

  -> For example, if you have a function that fetches some data from an API every time the user scrolls the page,
  you might want to throttle it so that it only makes one request every second, instead of making hundreds of requests as the user scrolls.
  This way, you can avoid overloading the server or the browser with unnecessary requests and reduce the bandwidth consumption.
*/

const myThrottle = (fn, d) => {
  return function (...args) {
    document.getElementById("myid").disabled = true;
    setTimeout(() => {
      fn(); // function we want to throttle
    }, d); // d-> delay after which fn() will be called (once)
  };
};
const newFun = myThrottle(() => {
  document.getElementById("myid").disabled = false;
  console.log("User Clicked !!");
}, 5000);
