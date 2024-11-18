// Event Bubbling(child to Parent)
/*
 * Event Bubbling is when an event starts at the target element and then bubbles up
  through its ancestors in the DOM tree, Moving from the innermost elment
  to outward element. (from inner button to outer div -> to outer body).
  The event bubbles back up from :: button → div → body
  (by default nature -> first button clicks)
 */
var div = document.querySelector("div");
var btn = document.getElementById("clickMe");

div.addEventListener(
  "click",
  () => {
    console.log("div");
  }
  //  true // Event capturing -> top -> bottom ( button <- div <- body)
);

btn.addEventListener("click", (event) => {
  // event.stopPropagation(); // button clicked no Propagation is done .
  console.log("Button Clicked !!");
});
btn.addEventListener("click", (event) => {
  event.stopImmediatePropagation();
  console.log("Button-2 Clicked !!");
});

// Now no event is Propagated
btn.addEventListener("click", (event) => {
  console.log("Button-3 Clicked !!");
});

// When on the same button we have added multiple Events (e1,e2,e3,e4 ...)
// and We want to go till e3 and stop event to propagate after it . -> simple put in e3 event.stopImmediatePropagation();

var a = document.querySelector("a");
a.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("button !!");
});

// By default nature of anchor tag is to go to the page Provided in href.
// But we can change it using event.preventDefault();
