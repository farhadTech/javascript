/* Functions and Methods: Block of code that performs a specific task, can be invoke whenever needed. */
/* function definition. */
// function functionName() {
//   // do some work.
// }

// function functionName(param1, param2, param3....) {
//   // do some work.
// }

// // function call.
// functionName();

// function myFunction() {
//   console.log("Welcome to VS code.");
//   console.log("We are learning JS.");
// }
// myFunction();
// myFunction();
/*
function myFunction(msg) {
  console.log(msg);
}
myFunction("I love JavaScript.");
*/
/*
function myFunction(msg, n) {
  console.log(`${msg}: ${n}`);
}
myFunction("I love JS", 100);
*/
/*
// 3 numbers sum in function
function sum(a, b, c) {
  console.log(a + b + c);
}
sum(12, 24, 36);
*/
/*
function Mul(x, y) {
  return x * y;
}
console.log(Mul(3, 4));
*/

/***** Arrow Functions */
/* A compact way of writing functions. */
/*
function sum(a, b) {
  return a + b;
}
function mul(a, b) {
  return a * b;
}
console.log(sum(3, 4), mul(4, 5));
*/

/* A way of writing arrow function. */
/*
const functionName =  `(param1, param2, etc_param) => {
  // do some work
}`
// inside tilde that is arrow function.
*/
/* We need to store arrow function in a variable. */
/*
const arrowSum = (a, b) => {
  console.log(a + b);
}
arrowSum(5, 4);
console.log(arrowSum);
*/
/*
const arrowMul = (a, b) => {
  console.log(a * b);
}
arrowMul(7, 8);
console.log(arrowMul);
*/
/*
const arrowDiv = (a, b) => {
  return a / b;
}
console.log(arrowDiv(4, 5));
*/
/*
const print = () => {
  console.log("Hello World");
}
console.log(print);
print();
*/

/*** QS. Create a function using the "function" keyword that takes a string as an argument & returns the number of vowels in the string." */
/*
function vowels(msg) {
  let count = 0;
  for (let char of msg) {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      count++;
    }
  }
  return count;
}

console.log(vowels("JavaScript"));
console.log(vowels("functions"));
console.log(vowels("vowels check using js function."));
*/
/*
let vowels = (msg) => {
  let count = 0;
  for (let char of msg) {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      count++;
    }
  }
  return count;
}
console.log(vowels("JavaScript"));
console.log(vowels("functions"));
console.log(vowels("vowels check using js function."));
*/

/******** Methods in JavaScript */
// forEach loop in Arrays. (Method)
// arr.forEach(callbackfunction);
/*
callbackfunction: Here, it is a function to execute for each element in the Array. */
/* A callback is a function passed as an argument to another function. */
/*
arr.forEach((val) => {
  console.log(val);
});
*/
/* Function in JS can be passed as a parameter. */
/*
function abc() {
  console.log("hello");
}
function myFunc(abc) {
  return abc;
}
*/

/*
let arr = [1, 2, 3, 4, 5];
arr.forEach(function myFunc(value) {
  console.log(value);
});
*/
/*
let arr = [1, 2, 3, 4, 5];
arr.forEach((val) => {
  console.log(val);
});
*/
/*
let arr = ["pune", "delhi", "mumbai"];
arr.forEach((val) => {
  console.log(val.toUpperCase());
});
*/
// Callback function has three default parameters.
/*
1. value / item.
2. index / position.
3. array itself.
*/
let arr = ["dhaka", "chittagong", "sylhet"];
arr.forEach((val /* value */ , index /* index */) => {
  console.log(val.toUpperCase(), index);
});

console.log("");
arr.forEach((val /* value */, index /* index */, arr /* array itself */) => {
  console.log(val.toUpperCase(), index, arr);
});

