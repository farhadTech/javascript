/***** What is hoisting? */
/* Hoisting is the default behavior in JavaScript where variable and function declarations are moved to the top of their respective scopes during the compilation phase. This guarantees that regardless of where these declarations appear within a scope, they can be accessed throughout that scope.
*/

/**** Feature of Hoisting */
/* Declarations are hoisted, not initializations.
  Allows calling functions before their declarations.
  All variable and function declarations are processed before any code execution.
  Undeclaraed variables are implicity created as globla variables when assigned a value.
*/

/**** Variable lifecycle */
/* let a; // declaration
  a = 100; // assignment
  console.log(a); // usage
*/

/*
// 1. Global scope
function codeHoist() {
  a = 10;
  let b = 50;
}
codeHoist();
console.log(a);
console.log(b);
*/

/*
// 2. JavaScript var hoisting
console.log(name);
var name = 'Mukul Bhuiyan';
*/
/*

// 3. Function scoped variable
function fun() {
  console.log(name);
  var name = 'Mukul Bhuiyan';
}
fun();
*/
/*
// 4. JavaScript hoisting with let
console.log(name);
let name = "Mukul Bhuiyan";
*/

// 5. JavaScript hoisting with const
fun();
function fun() {
  console.log("Function is hoisted");
}

// 6. Hoisting with function
fun2();
var fun2 = () => {
  let name = "Mukul Bhuiyan";
  console.log(name);
}
