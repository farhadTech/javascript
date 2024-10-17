/****** Why functions? */
/*
* functions can be used multiple times reducing redundancey.
* Break down complex problems into anageable pieces.
* Manage complexity by hiding implementation details.
* Can call themselves to solve problems recursively.
*/

/****** Function invocation. */
/*
* Triggered by an event. (eg., a button click by a user).
* When explicitly called from JavaScript Code.
* Automatically executed, such as in self-invoking functions.
*/

/****** Function definition */
/*
* Every function should begin with the keyword function followed by,
* A user - defined function name that should be unique.
* A list of parameters enclosed within parentheses and separated by commas.
* A list of statements composing the body of the function enclosed within curly braces { }.
*/
/*
function calcAddition(number1, number2) {
  return number1 + number2;
}
console.log(calcAddition(6, 9));
*/

/****** Function expression */
/*
It is similar to a function declaration without the function name. Function expressions can be stored in a variable assignment.
*/
/*
const square = function (number) {
  return number * number;
}
const x = square(4);
console.log(x);
*/

/****** Functions as variable values */
// Functions can be used the same way as you use variables.
// function to convert Fahrenheit to celsius.
/*
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
// using the function to covert temperature
let temperatureInFahrenheit = 77;
let temperatureInCelsius = toCelsius(temperatureInFahrenheit);
let text = "The temperature is " + temperatureInCelsius + " Celsius";
console.log(text);
*/

/********* Arrow Function */
/*
Arrow Function is one of the most used and efficient methods to create a function in JavaScript because of its comparatively easy implementation. It is a simplified as well as a more compact version of a regular or normal function expression or SyntaxError.
*/
/*
const functionName = (parameter1, parameter2,...) => {
  // function body
}
*/
/*
// A traditional function
function sum(a, b) {
  return a + b;
}
console.log("Sum is: "+ sum(2, 3));
*/
/*
const sum = (a, b) => a + b;
console.log("sum is: " + sum(5, 6));
*/
/*
1. consise syntax: if the function body has a single statement, and that statement returns a value, you can omit the curly braces {} and the return keyword.
*/
/*
const double = num => num * 2;
console.log(double(2));
*/
/*
// 2. No Parameters: If the function takes no parameters, use empty parentheses:
const greet = () => console.log("Hello!");
greet();
*/
/*
// 3. Multiple parameters: When there are multiple parameters wrap them in parentheses.
const multiply = (x, y) => x * y;
console.log(multiply(3, 9));
*/
/*
// 4. Returning objects
const getUser = () => ({ name: "Alice", age: 25 });
console.log(getUser());
*/
/*
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled);
*/

// More complex examples
/*
// 1. Implicit return with a single line
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens);
*/
/*
// 2. returning objects
const users = ['Alice', 'Bob', 'Charlie'];
const userObjects = users.map(name => ({ name, active: true }));
console.log(userObjects);
*/
/*
// 3. using destructing in parameters
const user = { name: 'Alice', age: 25 };
const greet = ({ name }) => `Hello, ${name}!`;

console.log(greet(user));
*/
/*
// 4. chaining multiple array methods
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = numbers
  .filter(num => num % 2 === 0)
  .map(num => num * 2)
  .reduce((sum, num) => sum + num, 0);

console.log(result);
*/
/*
// 5. Arrow function in object methods
const user = {
  name: 'Alice',
  tasks: ['task1', 'task2', 'task3'],
  showTasks() {
    this.tasks.forEach(task => console.log(`${this.name} needs to ${task}`));
  }
};
user.showTasks();
*/
/*
// 6. Default parameters in arrow functions
const multiply = (a, b = 2) => a * b;

console.log(multiply(3));
console.log(multiply(3, 4));
*/
/*
// 7. Recursive arrow functions
const factorial = n => (n <= 1 ? 1 : n * factorial(n - 1));
console.log(factorial(5));
*/
/*
// 8. Immediately invoked arrow functions
(() => {
  console.log("This function runs immediately!");
})();
*/
/*
// 9. currying with arrow functions
const multiply = a => b => a * b;
console.log(multiply(3)(4));
*/

// 10. short-circuiting with logical operators
const getName = name => name 