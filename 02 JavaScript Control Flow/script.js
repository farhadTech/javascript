// Example 1: Returning a single value
/*
function Products(a, b) {
  // return the product of a and b
  return a * b;
};

console.log(Products(5, 10));
*/

// example 2: returning multiple values using an object
/*
function Language() {
  let first = "HTML",
    second = "CSS",
    third = "JavaScript"
  return {
    first,
    second,
    third
  };
}

let { first, second, third } = Language();
console.log(first);
console.log(second);
console.log(third);
*/

/* JavaScript Break Statement */
/*
const fruit = "Mango";

switch (fruit) {
  case "Apple":
    console.log("Apple is healthy for out body.");
    break;
  case "Mango":
    console.log("Mango is a national fruit of India");
    break;
  default:
    console.log("I don't like fruits");
}
*/

// example 2:
/*
const fruit = "Apple";
switch (fruit) {
  case "Apple":
    console.log("Apple is healthy for our body");
  case "Mango":
    console.log("Mango is a national fruit of India");
    break;
  default:
    console.log("I don't like fruits");
} */
// EXAMPLE 3:
/*
for (let i = 1; i < 6; i++) {
  if (i == 4) break;
  console.log(i);
} */

/*
let i = 1;
while (i <= 5) {
  console.log(i);
  if (i === 3) {
    break;
  }
  i++;
}

let j = 1;
do {
  console.log(j);
  if (j === 3) {
    break;
  }
  j++;
} while(j <= 5);
*/

/* Continue Statement */
/*
for (let i = 0; i < 11; i++) {
  if (i % 2 == 0) continue;
  console.log(i);
} */

// example 2
/*
let i = 0;
while (i < 11) {
  i++;
  if (i % 2 == 0) continue;
  console.log(i);
} */


/* JavaScript Errors throw and try to catch */
/*
try {
  dadaalert("Welcome Fellow Geek!");
}
catch (err) {
  console.log(err);
}
*/

// example 2
/*
function geekFunc() {
  let a = 10;
  try {
    console.log("Value of variable a is: " + a);
  }
  catch (e) {
    console.log("Error: " + e.description);
  }
}
geekFunc();
*/

// throw statement
/*
try {
  throw new Error("Yeah... Sorry");
}
catch (e) {
  console.log(e);
} */

// finally blocks
/*
try {
  console.log("try");
}
catch (e) {
  console.log("catch");
}
finally {
  console.log("finally");
} */

/* using if statement */
/*
let num = 20;
if (num % 2 === 0) {
  console.log("Given number is even number.");
}
if (num % 2 !== 0) {
  console.log("Given number is odd number.");
}; */

// 2. Using if-else statement
/*
let age = 25;
if (age >= 18) {
  console.log("You are eleigible of driving licence.");
} else {
  console.log("Your are not eligible for driving licence");
}
*/
// 3. else if statement
/*
const num = 0
if (num > 0) {
  console.log("Given number is positive.");
} else if (num > 0) {
  console.log("Given number if negative.");
} else {
  console.log("Given number is zero.");
}
*/

// 4. using switch statement
/*
const marks = 85;
let branch;
switch (true) {
  case marks >= 90:
    branch = "Computer science and engineering";
    break;
  case marks >= 80:
    branch = "Mechanical engineering";
    break;
  case marks >= 70:
    branch = "Chemical engineering";
    break;
  case marks >= 60:
    branch = "Electronics and communication";
    break;
  case marks >= 50:
    branch = "Civil engineering";
    break;
  default:
    branch = "Bio Technology";
    break;
}

console.log(`Student Branch name is: ${branch}`);
*/

// 5. Using ternary operator (?:)
/*
let age = 21;
const result = (age >= 18) ? "You are eligible to vote." : "You are not eligible to vote.";
console.log(result);
*/
/*
let weather = "sunny";
let temperature = 25;

if (weather === "sunny") {
  if (temperature > 30) {
    console.log("It's a hot day!");
  } else if (temperature > 20) {
    console.log("It's a warm day.");
  } else {
    console.log("It's a bit cool today.");
  }
} else if (weather === "rainy") {
  console.log("Don't forget your umbrella!");
} else {
  console.log("Check the weather forecast!");
}; */


// JavaScript switch statement
/*
let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}

console.log(dayName);
*/
/*
let grade = 'B';
let result;
switch (grade) {
  case 'A':
    result = "A (Excellent)";
    break;
  case 'B':
    result = "B (Average)";
    break;
  case 'C':
    result = "C (Below than average)";
    break;
  default:
    result: "No Grade";
}
console.log(result);
*/

/*
// Position of default case does not matter
let day = 8;
let dayName;

switch (day) {
  default:
    dayName = "Invalid day";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
}
console.log(dayName);
*/
/*
let grade = 'A';
let result;

switch (grade) {
  case 'A':
    result = "Grade is excellent";
    break;
  case 'B':
    result = "Grade is good";
    break;
  case 'C':
    result = "Grade is average";
    break;
  case 'D':
    result = "Grade is poor";
    break;
  default:
    text = "No Grades achieved.";
}
console.log(result);
*/

