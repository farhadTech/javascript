/*
const date = new Date();
const formatDate = new Intl.DateTimeFormat('en-us').format(date);
console.log(formatDate);
*/
/*
// adding 7 days
let date = new Date();
date.setDate(date.getDate() + 7);
console.log(date);

// creating a specific date
let a = new Date(1996, 10, 13, 5, 30, 22);
console.log(a);

*/
/*
// JavaScript Numbers
let a = 156e5;
let b = 156e-5;
console.log(a);
console.log(b);


// integer precision
let x = 999999999999999;
let y = 9999999999999999;
console.log(x);
console.log(y);


// floating point precision
let p = 0.22 + 0.12;
let q = (0.22 * 10 + 0.12 * 10) / 10;
console.log(p);
console.log(q);

// adding numbers and strings
let r = 10;
let s = 15;
let t = r + s;
console.log(t);

// concatenating two strings
let u = "10";
let v = "30";
let w = u + v;
console.log(w);
*/
/*
// decimal numbers
let a = 33;
let b = 3.3;
console.log(a);
console.log(b);

// octal numbers
let x = 0562;
console.log(x);

// binary numbers
let u = 0b11;
let v = 0B0111;
console.log(u);
console.log(v);

// hexadecimal numbers
let p = 0xfff;
console.log(p);

// 1. undefined to Nan
const result = undefined + 10;
console.log(result);

// 2. Null to 0:
const total = null + 5;
console.log(total);

// 3. Boolean to Number
const num1 = true + 10;
const num2 = false + 10;
console.log(num1);
console.log(num2);

// string to number
const str1 = '42';
const str2 = 'hello';

const numFromString1 = Number(str1);
const numFromtString2 = Number(str2);

console.log(numFromString1);
console.log(numFromtString2);

// 5. BitInts and Symbols
const symbolValue = Symbol('mySymbol');
const numFromSymbol = Number(symbolValue);
console.log(numFromSymbol);
*/
/*
// JavaScript Math
console.log("Math.LN10: " + Math.LN10);
console.log("Math.LOG2E: " + Math.LOG2E);
console.log("Math.Log10E: " + Math.LOG10E);
console.log("Math.SQRT2: " + Math.SQRT2);
console.log("Math.LN2: " + Math.LN2);
console.log("Math.E: " + Math.E);
console.log("Math.PI: " + Math.PI);

// example 2
console.log("Math.abs(-4.7): " + Math.abs(-4.7));
console.log("Math.ceil(4.4): " + Math.ceil(4.4));
console.log("Math.floor(4.7): " + Math.floor(4.7));
console.log("Math.sin(90 * Math.PI / 180): " + Math.sin(90 * Math.PI / 180));
console.log("Math.min(0, 150, 30, 20, -8, -200): " + Math.min(0, 150, 30, 20, -8, -200));
console.log("Math.random(): " + Math.random());
*/
/*
// objects
let strPrimitive = "GeeksforGeeks";
typeofstrPrimitive;
strPrimitive instanceof String;

let strObject = new String("GeeksforGeeks");
typeof strObject;
strObject instanceof String;

Object.prototype.toString.call(strObject);
*/
/*
let myObj = {
  int_prop: 5,
  str_prop: "GeeksforGeeks",
  obj_prop: new Date(),

  inner_obj: {
    int_prop: 6
  },

  func_prop: function () {
    console.log("Welcome to GeeksforGeeks!");
  }
};

console.log(myObj.int_prop);
console.log(myObj.str_prop);
console.log(myObj.obj_prop.toLocaleTimeString());
console.log(myObj.inner_obj.int_prop);

myObj.func_prop();
*/
/*
function toGreet() {
  console.log("Hello There!");
}

let myObj = {
  greet: toGreet,

  byWhom: function () {
    console.log("GeeksforGeeks.org");
  }
}

myObj.greet();
myObj.byWhom();

*/
/*
// Boolean
function gfg() {
  console.log(Boolean(12));
}
gfg();

console.log('Boolean(10) is ' + Boolean(10));
console.log('Boolean("GeeksforGeeks") is ' + Boolean("GeeksforGeeks"));
console.log('Boolean(2.74) is ' + Boolean(2.74));
console.log('Boolean(-1) is ' + Boolean(-1));
console.log("Boolean('true') is " + Boolean('true'));
console.log("Boolean('false) is " + Boolean('false'));
console.log('Boolean(3 * 2 + 1.11) is ' + Boolean(3 * 2 + 1.11));
console.log('Boolean(1 < 2) is ' + Boolean(1 < 2));
console.log(""); console.log("");

let e;
console.log('Boolean(0) is ' + Boolean(0));
console.log('Boolean("") is ' + Boolean(""));
console.log('Boolean(e) undefined is ' + Boolean(-0));
console.log('Boolean(false) is ' + Boolean(false));
console.log('Boolean(NaN) is ' + Boolean(NaN));
console.log('Boolean(null) is ' + Boolean(null));
console.log('Boolean(1 > 2) is ' + Boolean(1 > 2));
console.log(""); console.log("");

let v1 = false;
let v2 = new Boolean(false);
let v3 = new Boolean("");
let v4 = new Boolean(0);
let v5 = new Boolean(true);
let v6 = new Boolean("GeeksforGeeks");

console.log('v1 = ' + v1);
console.log('v2 = ' + v2);
console.log('v3 = ' + v3);
console.log('v4 = ' + v4);
console.log('v5 = ' + v5);
console.log('v6 = ' + v6);
console.log(""); console.log("");

let x1 = true;
let x2 = new Boolean(true);

console.log('v1 == v2 is ' + (v1 == v2));
console.log('v1 === v2 is ' + (v1 === v2));
*/

// json arrays
/*
{
  "Avengers": [
    {
      "Name": "Tony Startk",
      "also know as": "Iron man",
      "Abilities": [
        "Genius",
        "Billionaire",
        "Playboy",
        "Philanthropist"
      ]
    },
    {
      "Name": "Peter Parker",
      "also known as": "Spider man",
      "Abilities": [
        "Spider Web",
        "Spidy sense"
      ]
    }
  ]
} */

