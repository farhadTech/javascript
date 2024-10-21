/* Async and await in JavaScript is used to simplify handling asynchronous opererations using promises. By enabling asynchronous code to appear synchronous, they enhance code readability and make it easier to manage complex asynchronous flows. */

/******* Asyncs Function */
/* The async function allows us to write promise-based code as if it were synchronous. This ensures that the execution thread is not blocked.
*/
/*
const getData = async () => {
  let data = "Hello World";
  return data;
}

getData().then(data => console.log(data));
*/

/****** Await keyword */
/* The await keyword is used to wait for a promise to resolve. It can only be used within as async block. */
/* Execution Pause: Await makes the code wait until the promise returns a result, allowing for cleaner and more manageable asynchronous code. */
/*
const getData = async () => {
  let y = await "Hello World";
  console.log(y);
}

console.log(1);
getData();
console.log(2);
*/

/* The async keyword transforms a regular JavaScript function into an asynchronous function, causing it to return a Promise. */

/* The await keyword is used inside an async function to pause its execution and wait for a promise to resolve before continuing. */
/*
function asynchronous_operational_method() {
  let first_promise =
    new Promise((resolve, reject) => resolve("Hello"));
  let second_promise =
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(" GeeksforGeeks.. ");
      }, 1000);
    });
  let combined_promise =
    Promise.all([first_promise, second_promise]);
  return combined_promise;
}
async function display() {
  let data = await asynchronous_operational_method();
  console.log(data);
}
display();
*/

/***** Error Handling in Async/Await */
/* resolve: Used when an asynchronous task is completed successfully.
   reject: Used when an asynchronous task fails, providing the reason for failure.
*/
/*
async function fetchData() {
  try {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
}

/***** Advantages of Async and Await */
/* Improved readability: async and await allow asynchronous code to be written in a synchrounous style, making it easier to read understand.
  Error Handling: using try/catch blocks with async/await simplifies error handling.
  Avoids Callback Hell: async and await prevent nested callbacks and complex promise chains, making the code more linear and readable.
  Better Debuggin: Debugging async/await code is more intuitive since it behaves similarly to synchronous code.
  */
  
