const cart = ["shoes", "pants", "kurta"];

//Consumer
const promise = createOrder(cart); // orderId -> This is an api which returns promise.

promise.then(function (orderId) {
  console.log(orderId);
  // proceedToPayment(orderId);
});

// Producer

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // resolve and reject are the functons given by js to build the promise
    // logic for handling what we need to do inside this createOrder()
    // validateCart
    if (!validateCart(cart)) {
      const err = new Error("Cart is not Valid !!");
      reject(err);
    } else {
      // logic for creating order
      const orderId = "12345";
      if (orderId) {
        setTimeout(() => {
          resolve(orderId);
        }, 5000);
      }
    }
  });
  return pr;
}

function validateCart(cart) {
  return true;
}

// Sample
// function createOrder(cart) {
//   const pr = new Promise(function (resolve, reject) {
//     if (!validateCart(cart)) {
//       const err = new Error("Noy Validated !!");
//       reject(err);
//     } else {
//       const orderId = 12345;
//       if (orderId) {
//         setTimeout(() => {
//           resolve(orderId);
//         }, 5000);
//       }
//     }
//   });
//   return pr;
// }
