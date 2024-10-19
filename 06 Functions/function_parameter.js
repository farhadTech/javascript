/*
// 1. Default parameter
function fun(num1, num2 = 2) {
  return num1 * num2;
}
console.log(fun(4));

// 2. function rest parameter
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(10));
console.log(sum());

// 3. argument object
function fun() {
  let i;
  let maxNum = -Infinity;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] > maxNum) {
      maxNum = arguments[i];
    }
  }
  return maxNum;
}
console.log(fun(10, 12, 500, 5, 440, 45));

// 4. arguments pass by value
function fun(var1, var2) {
  console.log("Inside the function.");
  var1 = 100;
  var2 = 200;

  console.log("var1 = " + var1 + " var2 = " + var2);
}

var1 = 10;
var2 = 20;
console.log("Before function calling");
console.log("var1 = " + var1 + " var2 = " + var2);
fun(var1, var2);
console.log("After function calling : ");
console.log("var1 = " + var1 + " var2 = " + var2);

function fun2(varObj) {
  console.log("Inside function");
  varObj.a = 100;
  console.log(varObj.a);
}

varObj = { a: 1 };
console.log("Before function calling");
console.log(varObj.a);
fun2(varObj);
console.log("After function calling");
console.log(varObj.a);
*/
