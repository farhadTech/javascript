/*
let a = 4;
let b = 1;
console.log("A & B = " + (a & b));
console.log("A | B = " + (a | b));
console.log("~A = " + (~a));
*/
/*
let a = 6;
let b = 1;
console.log("A & B = " + (a & b));
console.log("A | B = " + (a | b));
console.log("~A = " + (~a));
console.log("A >> B = " + (a >> b));
console.log("A >>> B = " + (a >>> b));
console.log("A << B = " + (a << b));
*/
/*
// logical AND (&&) Operator
let i = 0, j = 2, k = 3, l = 8;
console.log(Boolean(i && j));
console.log(Boolean(j && k && l));
*/
/*
// Logical OR (||) Operator
let i = 1;
let j = null;
let k = undefined;
let l = 0;

console.log(Boolean(j || k));
console.log(Boolean(i || l));
*/
/*
// Logical Not (!) Operator
let i = 0;
console.log(!i);
console.log(!!i);
*/
/*
let username = null;
let defaultName = "Guest";

let displayName = username ?? defaultName;
console.log(displayName);
*/
/*
// JavaScript BigInt
let bigNum = BigInt("123422222222222222222222222222222222");
console.log(bigNum);

let bigHex = BigInt("0x1ffffffeeeeeeeeef");
console.log(bigHex);

let bigBin = BigInt("0b1010101100010101010011111111111111");
console.log(bigBin);
*/

/*
// Creating BigInt by appending n
let bigNum = 123422222222222222222222222222222222222n;
console.log(bigNum);

let bigHex = 0x1ffffffeeeeeeeeefn;
console.log(bigHex);

let bigBin = 0b1010101001010101001111111111111111n
console.log(bigBin);
*/
/*
// Comparing BigINt other types
typeof 100n === 100;
typeof 100n == 100;
typeof 100n === 'bigint';
100n < 101
*/
/*
let arr = [4, 2, 5n, 2n];
arr.sort();
console.log(arr);
*/

/*
// string concatenate operator
let str1 = "Farhadur ";
let str2 = "Rahman";
let result = (str1 + str2);
console.log(result);
*/
/*
// string concatenate assignment operator
let str1 = "Geeks";
let str2 = "forGeeks";

str1 += str2;
console.log(str1);
*/
/*
// JavaScript Ternary Operator
function gfg() {
  let marks = 40;
  let result = (marks > 39) ? "Pass" : "Fail";
  console.log(result);
}

gfg();
*/
/*
function gfg() {
  let age = 60;
  let result = (age > 59) ? "Senior Citizen" : "Not a Senior Citizen";

  console.log(result);
}

gfg();

function gfg() {
  let marks = 95;
  let result = (marks < 40) ? "Unsatisfactory" :
    (marks < 60) ? "Average" :
      (marks < 80) ? "Good" : "Excellent";

  console.log(result);
}

gfg();
*/
/*
function func1() {
  console.log('one');
  return 'one';
}

function func2() {
  console.log('two');
  return 'two';
}

function func3() {
  console.log('three');
  return 'three';
}

let x = (func1(), func2(), func3());
console.log(x);
*/
/*
for (let a = 0, b = 5; a <= 5; a++, b--) {
  console.log(a, b);
}
*/
/*
let a = 1, b = 2, c = 3;

console.log("Initial values: ");
console.log("a: ", a);
console.log("b: ", b);
console.log("c: ", c);

(a *= 2), (b *= 3), (c *= 4);
console.log("Updated values: ");
console.log("a: ", a);
console.log("b: ", b);
console.log("c: ", c);
*/
/*
// JavaScript Relational Operators
let languages = ["HTML", "CSS", "JavaScript"];
console.log(1 in languages);
console.log(3 in languages);
*/
/*
const Data = {
  name: "Rahul",
  age: 21,
  city: "Noida"
};

console.log("name" in Data);
console.log("address" in Data);
*/

