// let i;
// for (i = 1; i <= 5; i++) {
//   console.log(i);
// }
// console.log(i);


// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   sum += i;
// }
// console.log(sum);

// for-of loop
// for-of giving me value of array.
// let str = "ApnaCollege";
// for (let i of str) {
//   console.log(i);
// }

/* We can use for of loop for strings and arrays, but for object we can not use for of loop. */
// for-in giving me index of array
// for-in loop;
// let str = "Testing purpose.";
// for (let i in str) {
//   console.log(i);
// }

// let size = 0;
// let string_text = "This sentence consists some strings";
// for (let i of string_text) {
//   size++;
// }
// console.log(size);

/* We can use for in loop for objects to get keys of values. */
// let student = {
//   name: "Rahul Kumar",
//   age: 20,
//   cgpa: 7.5,
//   isPass: true
// };

// for (let i in student) {
//   console.log(i);
// }

// for (let key in student) {
//   console.log("key = ", key, " ,value = ", student[key]);
// }

/* Print all even numbers from 0 to 100. */
// let i;
// for (i = 1; i <= 100; i++) {
//   console.log(i);
// }

/* Create a game where you start with any random game number. Ask the user to keep guessing the number until the user enters correct value. */
// let gameNumber;
// gameNumber = 25;
// let userNumber;
// userNumber = prompt("Guess the game number: ");
// while (userNumber != gameNumber) {
//   prompt("You entered wrong number. Guess again.");
//   console.log("You entered wrong number. ");
// }
// prompt("Congratulations, you entered the right number.");
// console.log("you entered the correct number.");

/*
let str;
str = 'JavaScript';
console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
console.log(str[3]);
console.log(str[4]);
console.log(str[5]);
console.log(str[6]);
console.log(str[7]);
console.log(str[8]);
console.log(str[9]);

console.log(str);

for (let i of str) {
  console.log(i);
}

for (let i in str) {
  console.log(i);
}
*/

/****** Template literals in JS */
// let specialString = `This is a template literal.`;
// console.log(specialString);
// console.log(typeof specialString);

// let obj = {
//   item: "pen",
//   price: 10,
// };

// console.log("the cost of", obj.item, "is", obj.price, "rupees");
// let output;
// output = `the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);

/***** String Methods in JavaScript */
/* these are built-in functions to manipulate a string. */
/*
  *str.toUpperCase();
  *str.toLowerCase();
  *str.trim(); // remove whitespace
*/

/* In javaScript strings are immutable means strings can not be changed */

// let str = "JavaScript";
// let newStr = str.toUpperCase();
// console.log(newStr);
// newStr = str.toLowerCase();
// console.log(newStr);
// str = "     JavaScript    ";
// console.log(str);
// // trim method used to remove whitespace in a string.
// console.log(str.trim());

// str.slice() returns part of string.
// let str = "01234567890";
// console.log(str.slice(1, 6));

// let str2 = "hello";
// console.log(str2.slice(0, 3));

/* str1.concat(str2). //joins str2 with str1 */
// let str1 = "Java";
// let str2 = "script";
// let res = str1.concat(str2);
// console.log(res);

// str1 = "hello ";
// str2 = "world.";
// res = str1 + str2;
// console.log(res);

// res = "hello" + 123;
// console.log(res);

/**** str.replace(searchVal, newVal); */
// let str = "hello";
// console.log(str);
// console.log(str.replace("h", "y"));
// console.log(str.replace("lo", "p"));
// str = "hellololo";
// console.log(str.replaceAll("lo", "p"));

// let userName;
// userName = prompt("Enter user name: ");
// let result;
// result = "@" + userName + userName.length;
// alert(result);
// console.log(result);
