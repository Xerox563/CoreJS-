//* fundamenetal Data Structure used to store data in the form of key value pairs
// * Standalone Entity collection fo properties each consisting of (key -> values)

// Creation
const obj1 = {
  name: "Amit",
  city: "Bareily",
  age: 18,
  greet: function () {
    console.log("Good Morning !!");
  },
};

const obj = new Object();
obj.name = "Amit";
obj.age = 17;

// Object.create(obj1);
// console.log(obj1, obj);

// // Access
// const sex = "male";
// console.log(obj.name);
// console.log(obj["age"]);
// console.log(obj[sex]);

// deletion
//delete obj.age;

// Iteration ->  for in Loop
for (let key in obj) {
  console.log(key, obj[key]);
}

// Cloning

// const obj2 = { ...obj };
const obj2 = Object.assign({}, obj);
console.log(obj2);

// * Properties

// 1-> Object.keys() -> return an array of object Keys
const a1 = Object.keys(obj);
console.log(a1);
// 1-> Object.values() -> return an array of object values
const a2 = Object.values(obj);
console.log(a2);
// 1-> Object.entries()-> return an array of object pairs
const a3 = Object.entries(obj);
console.log(a3);
// 1-> Object.freeze()-> prevents modification of existing keys after this)
Object.freeze(obj);

// 1-> Object.seal()-> prevents addition of new properties (but allows modification)
Object.seal(obj);

console.log(a1, a2, a3);
