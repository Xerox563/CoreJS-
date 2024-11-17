const data = [
  { name: "amit", company: "Google", Location: "Boston" },
  { name: "amit", company: "Google", Location: "Boston" },
];

function getData() {
  setTimeout(() => {
    let output = "";
    data.forEach((data, ind) => {
      output += `<li>${data.name}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

getData();

//* Promise
/* A Promise is an Object that represents the eventual completion (or failure) of an asynchronous Operation . It likes you to handle the success or failure of an async operation without getting trapped in a callback hell . 
 
* A Promise has three states:
 Pending: The initial state—operation has neither completed nor failed.
 Fulfilled: The operation completed successfully.
 Rejected: The operation failed.
*/

myPromise
  .then((res) => {
    console.log(res); // operation successful
  })
  .catch((error) => {
    console.log(error); // operation failed
  })
  .finally(() => {
    console.log("Operation Successful !!"); // doesnot depends on success or failure
  });

// Example

//*
