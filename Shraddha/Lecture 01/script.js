/*
fullName = 'Tony Stark';
age = 24;
price = 99.99;
radius = 14;
a = null;
y = undefined;
isFollow = true;
*/

/* JavaScript is Dynamically typed: we can write like this also. */
// age = 'twenty-five';
// console.log(age);

/* var:
variable can be re-declared & updated. A global scope variable.
/*
var age = 65;
var age = 87;
var age = 100;
console.log(age);
*/

/******* let*/
/*
variable cannot be re-declared but can be updated or reassigned. A block scope variable.
*/
// let age = 24;
// we can not declare twice using let keyword.
// let age = 22; this is an error.
// const text = 'text';

/**** const */
/*
const: Variable cannot be re-declared or updated. A block scope variable.
*/
// const test = 'test';
// test = 'updated';  this is an error we can not reassigned constant variable.
/*
{
  let a = 5;
  console.log(a);
}

{
  let a = 10;
  console.log(a);
}
*/

// Primitive(7)
// let age = 24;
// let price = 100.5;
// console.log(price);
// console.log(age);
// console.log(typeof (price));


// fullName = 'Tony Stark';
// console.log(fullName);
// console.log(typeof (fullName));

// let x;
// console.log(typeof (x)); // undefined

// let x = null;
// console.log(x);
// console.log(typeof (x));

// let x = BigInt("12345678910");
// console.log(x);
// console.log(typeof (x));

// let y = Symbol("Hello");
// console.log(y);
// console.log(typeof (y));


/********* Objects: Non-primitive data types */
// object is a collection of values.
/* In here fullName, age, cgpa, works like key and "Rahul Dravid", 20, 8.2, true works like values.
*/
/*
const Student = {
  fullName: "Rahul Dravid",
  age: 20,
  cgpa: 8.2,
  isPass: true,
};

console.log(Student["fullName"]);
console.log(Student["age"]);
console.log(Student.isPass);

Student["age"] = Student["age"] + 5;
console.log("Student's age is", Student.age);
*/

// Practice Questions
const Product = {
  name: 'Pen',
  title: 'Parker Jotter Standard CT Ball Pen',
  rating: 4,
  tag: 'Deal of the day.',
  price: 270
};

console.log("Product name is", Product.name);
console.log("Product title is", Product.title);

