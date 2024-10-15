// Variables

// Declaration using var
var geek = "Hello Geek";

// Declaration using let
let $ = "Welcome";

// Decration using const
const _example = "Gfg";


// Example 1
/*
var a = "Hello Geeks";
var b = 10;
var c = 12;
var d = b + c;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
*/


// Example 2
/*
let a = "Hello Learners";
let b = "joining";
let c = " 12";
let d = b + c;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
*/

// Example 3
/*
const a = "Hello learners";
console.log(a);

const b = 400;
console.log(b);

const c = "12";
console.log(c);
// Can not change a value for a constant
c = "new"
console.log(c);
*/

// Example 4
/* In this example, we are trying to access the block scoped variables outside the block that's why we are getting error. */
/*
{
  let a = 2;
  let b = 4;
  const c = "Hello";
  console.log(a);
  console.log(b);
  console.log(c);
}

console.log(b);
console.log(c);
console.log(a);
*/
// Explanation: since variables "a" and "c" are block scoped so we were not able to access them outside their block.

/*
When to Use var, let, or const
* We declare variables using const if the value should not be changed.
* We use const if the type of the variables should not be changed such as working with Arrays and objects
* We should use let if we want mutable value or we can not use const
* We use var only if we support old browser.

*/

// Comparison of properties of let, var, and const keywords in JavaScript
/*
Property    ||    var           ||      let       ||    const

scope         Function scoped       Block scoped      Block scoped
Updation      Mutable                Mutable           Immutable
Redeclaration Can be redeclared     Cannot be redeclared  Can not be redeclared
Hoisting      Hoisted at top         Hoisted at top       Hoisted at top
Origins       Pre ES2015            ES2015(ES6)           ES2015(ES6)
Support
*/

// JavaScript Let
// 1. Block Scope
/*
{
  let num = 10;

  // calling the function inside block
  console.log(num);
}

// calling a function outside block throws aan error.
console.log(num);
*/

// 2. Global Scope
/*
let num = 10;
console.log(num);

function fun() {
  console.log(num);
}

fun(); // calling the function
*/

// 3. Function scope
/*
function fun() {
  let num = 10;
  console.log(num);
}

fun();
console.log(num);
*/

// 1. Redeclaring variables in different blocks
/*
let x = 77;
{
  let x = 23;
  console.log(x);
}

console.log(x);
*/

// 2. Redeclaring variables in the same blocks
/*
let x = 77;
{
  let x = 23; // legal
  console.log(x);
}
let x = 67; //illegal
console.log(x);
*/

// Does not support Hoisting
// The behavior of moving the declarations on top of the script is known as hoisting
/*
let x = 12;
console.log(x);

let x;
*/

// JavaScript var keyword
// Example 1
/*
var test = 12;
function foo() {
  console.log(test);
}
foo();
*/

// example 2
/*
var test1 = 12,
  test2 = 14,
  test3 = 16
function foo() {
  console.log(test1, test2, test3);
}
foo();
*/

// example 3
/*
console.log(test);
var test = 12;
*/

// example 4
/*
var test = 12;
var test = 100;
console.log(test);
*/

// example 5
/*
var test = 12;
function foo() {
  var test = 100;
  console.log(test);
}
foo();
console.log(test);
*/

// example 6
/*
'use strict';
var test = 12;
delete (test);
console.log(test);
*/

// JavaScript const
// example 1
/*
const x = 12;
x = 13;
x += 1;
*/

// example 2
/*
const x = 22;
{
  const x = 90;
  console.log(x);

  {
    const x = 77;
    console.log(x);
  }
  {
    const x = 45;
    console.log(x);
  }
}
console.log(x);
*/
// variables must be assigned
/*
const x;
x = 12;
*/

// can not be hoisted
/*
x = 3;
console.log(x);
const x;
*/

// const in arrays
/*
const arr1 = ["pankaj", "sumit", "chandan", "ajay"];
console.log(arr1.toString());
arr1[2] = "Narayan";
console.log(arr1.toString());
*/

/* const in objects */
/*
const person = {
  first_name: "pankaj",
  last_name: "singh",
  age: 20,
  about: "Web Developer and competitive Programmer"
};

console.log(person);

// It is possible
person.first_name = "Aryan";
person.last_name = "Yadav";
person.age = 22;
person.about = "Commerce undergraduate";

console.log(person);
*/

