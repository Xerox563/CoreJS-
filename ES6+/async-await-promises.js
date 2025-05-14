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

// myPromise
//   .then((res) => {
//     console.log(res); // operation successful
//   })
//   .catch((error) => {
//     console.log(error); // operation failed
//   })
//   .finally(() => {
//     console.log("Operation Successful !!"); // doesnot depends on success or failure
//   });

// Example
const fetchData = () => {
  fetch("https://dummyjson.com/users")
    .then((response) => {
      if (!response.ok) {
        console.log("No Response !!");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("Error !!");
    });
};

fetchData();

//* Async-await
/*
 Async -> function that returns a promise . Inside an async function , you can use the await keyword to pause the sececution until a promise is resolved or reject.
 await -> used an async function. It makes js wait until the promise resolveds and returns its result
*/

const fetchUser = async () => {
  try {
    const res = await fetch("https://dummyjson.com/users");
    if (!res.ok) {
      console.log("Erorr !");
    }
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

fetchUser();

// Using Promises

// const getData = () => {
//   fetch("https://dummyjson.com/users")
//     .then((res) => res.json())
//     .then((data) => console.log(data.users))
//     .catch((err) => console.log(err))
//     .finally(() => console.log("I Run Independently of success or failure .."));
// };

// getData();

// async function getResult() {
//   try {
//     const data = await fetch("https://dummyjson.com/users");
//     const res = await data.json();
//     console.log(res.users);
//   } catch (err) {
//     console.log(err);
//   }
// }

// getResult();

//* Example (callback hell -> Pyramid of Doom)
/*
-> Get User data from server
-> Get Uer Posts
-> Get comments from one of the post
*/

// Getting the user from the number of the users
getUser(function (user) {
  // Getting the post from the number of posts so that once we have one post , we can get the comments of that post
  getPosts(user.id, function (posts) {
    // Getting the comments from that particular post
    getComment(posts[0].id, function (comments) {
      console.log("comments:", comments);
    });
  });
});

// using promises
getUser()
  .then((user) => getPosts(user.id)) // go the user -> needs post
  .then((post) => getComment(post[0].id)) // got the post -> needs the comment
  .then((comments) => console.log(comments))
  .catch((err) => console.log(err))
  .finally(() => console.log("Something is Executed !!"));

// using async-await
const getPostData = async () => {
  try {
    const user = await getUser(); // get the user
    const post = await getPosts(user.id);
    const comment = await getComment(post[0].id);
    console.log(comment);
  } catch (err) {
    console.log(err);
  }
};

/*
Callbacks: Hard to read, deeply nested.
Promises: Cleaner, flat .then() chaining.
Async/Await: Most readable, looks like synchronous code.
*/
