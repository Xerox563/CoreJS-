const carts = ["shoes", "pants", "kurta"];

//Consumer
const prom = createOrder(carts); // orderId -> This is an api which returns promise.
console.log(prom); // pending state

// success part
promise
  .then(function (orderId) {
    console.log(orderId);
    // proceedToPayment(orderId);
    return orderId;
  })
  .then((orderId) => {
    return proceedToPayment(orderId);
  })
  .then((paymentInfo) => {
    console.log(paymentInfo);
  })
  .catch((error) => {
    console.log(error.message);
  })
  .then(() => {
    console.log(
      "No matter I will be called always :: As i am in lower level than catch !!"
    );
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

const proceedToPayment = (orderId) => {
  return new Promise((resolve, reject) => {
    resolve("Payemnt Successful !!");
  });
};

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

/*
 * Catch Only handles errors athat are present at the top of it not bottom of it .
 * We always attach a callback function to the promise . (not pass the callback function).
 */

// ----------------------------------------------------------------------------------------------------------

// Practice
// Functionalities : createOrder , proceedToPayment,showOrderSummary,UpdateWallet
// Declare functions using function declarations
function createOrder(cart) {
  const pr = new Promise((resolve, reject) => {
    if (!Validate(cart)) {
      const err = new Error("Cart not Validated !!");
      reject(err);
    } else {
      const orderId = 12345;
      setTimeout(() => {
        resolve(orderId);
      }, 1000);
    }
  });
  return pr;
}

function Validate(cart) {
  return true;
}

function proceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    console.log("Payment Successful !!");
    resolve("Payment Info");
  });
}

function showOrderSummary(info) {
  return new Promise((resolve, reject) => {
    const obj = {
      status: "Successful",
      amount: 1000,
      flag: false,
    };
    resolve(obj);
  });
}

function updateWallet(data) {
  const { amount } = data;
  return new Promise((resolve, reject) => {
    const newAmount = amount + 1000;
    setTimeout(() => {
      console.log("newAmount", newAmount);
      resolve(newAmount);
    }, 5000);
  });
}

const cart = ["Pizza", "Chowmein", "Paneer Tikka", "Burger"];
const promise = createOrder(cart);

// * Explanation
/* 
* 1. Initialize the Cart
    An array cart is created with four food items: "Pizza", "Chowmein", "Paneer Tikka", and "Burger". This represents the user's order.
* 2. Start the Order Creation Process
    The createOrder(cart) function is called with the cart as an argument.
    The createOrder function returns a promise that simulates the creation of the order.
* 3. Order Creation Validation
    Inside the createOrder function, the cart is validated by the Validate function (which always returns true here).
    Since the cart is valid, a mock order ID (12345) is created after a 5-second delay, and the promise is resolved with this order ID.
* 4. Order Created
    Once the promise resolves, the first .then block is executed.
    It logs "Order Created !!" to the console and passes the order ID (12345) to the next .then block.
* 5. Proceed to Payment
    The order ID is passed to the proceedToPayment function, which simulates the payment process.
    In the proceedToPayment function, a success message ("Payment Successful !!") is logged, and the promise is resolved with a string "Payment Info".
* 6. Show Order Summary
    After the payment is successful, the "Payment Info" is passed to the showOrderSummary function.
    This function returns an object that contains:
    status: "Successful"
    amount: 1000
    flag: false
    The promise resolves with this summary object.
* 7. Update Wallet
    The showOrderSummary function passes the summary object to the updateWallet function.
    The updateWallet function extracts the amount from the summary and adds 1000 to it, resulting in a new wallet balance of 2000.
    After a 5-second delay, the updated amount (2000) is logged to the console.
* 8. Final Output
    The final wallet amount (2000) is displayed in the console, and the process is complete.
* Error Handling:
    If at any point in the process something goes wrong (like if the cart is invalid), the .catch block will be triggered and an error message will be logged. However, in this case, since the Validate function always returns true, no error occurs.
* The code simulates an order process:
    Create an order.
    Process payment.
    Show order summary.
    Update wallet balance.
-> The promise chain ensures that each step is executed sequentially, and any errors are caught and logged.
 */
