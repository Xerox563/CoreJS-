let userDetails = {
  name: "Amit Gangwar",
  age: 19,
  role: "Js Developer",
  company: "Meta",
  printDetails: function () {
    // this points to the object
    console.log(this.name);
  },
};

userDetails.printDetails();

// this -> use krtae hain object ko point krnae kae liyae object ki properties ko point krwanae kae liyae .

let printData = function (x) {
  console.log(this.company);
  console.log(this);
  console.log(x);
};

// ----------------------------------------------------------------------------------------
// * Call

printData.call(userDetails, "Delhi");
let userDetails2 = {
  name: "Raju shah",
  age: 29,
  company: "Meta",
  consoleData: function (x, y) {
    console.log(x, y);
  },
};

// Currently this points to the userDetails {} , but i want to point this -> userDetails2
// No need to copy the function again and again
// Function Borrowing
printData.call(userDetails, "Mumbai"); // when the function is present outside . (means Its not pointing to any Object)
userDetails.printDetails.call(userDetails2); // when its present inside object

// ----------------------------------------------------------------------------------------
// * Apply -> call kae time pae aap jo as a arguments mae pass kr rhae ho ussae ek array mae daaldo (pass as arrayList)

userDetails2.consoleData.apply(userDetails, ["New York", "Chicago"]);

// ----------------------------------------------------------------------------------------
// * Bind -> Its like call but bind kehta hai aap direct function call mt kro , app uski ek copy bnalo and jab aapko lgae tb aap usssae call kr lo.

let newFun = printData.bind(userDetails, "Alex"); // returns a function
newFun();

// In Bind we store the copy of that function and invokes it letter.
