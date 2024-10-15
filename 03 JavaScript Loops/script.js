// example
/*
let x;

for (x = 2; x <= 4; x++) {
  console.log("Value of x: " + x);
} */

// statement 1: initializing counter variable
/*
let x = 2;
for (; x <= 4; x++) {
  console.log("Value of x: " + x);
}
*/

// statement 2: Testing condition
/*
let x = 2;
for (; ; x++) {
  console.log("Value of x: " + x);
  break;
} */

// statement 3: Updating counter variable
/*
const subjects = ["Maths", "Science", "Polity", "History"];
let i = 0;
let len = subjects.length;
let gfg = "";
for (; i < len;) {
  gfg += subjects[i];
  i++;
}
console.log(gfg);
*/

// do while loop
/*
let test = 1;
do {
  console.log(test);
  test++;
} while (test <= 5);
*/
/*
let test = 1;
do {
  console.log(test);
  test++;
} while (test < 1);

let i = 1;
while (i < 1) {
  console.log(i);
  i++;
}
*/

//javaScript while loop
/*
let count = 1;
while (count <= 5) {
  console.log(count);
  count++;
} */

// javaScript do while loop
/*
let count = 1;
do {
  console.log(count);
  count++;
} while (count <= 5);
*/

// for in loop
/*
const array = [1, 2, 3, 4, 5];
for (const value in array) {
  console.log(array[value]);
}
*/

// example 2

/*
const courses = {
  // declaring a courses object
  firstCourse: "C++ STL",
  secondCourse: "DSA self paced",
  thirdCourse: "CS Core Subjects"
};

// Creatring a new empty object with prototype set to courses object
const student1 = Object.create(courses);

// Defining student1 properties and methods
student1.id = 123;
student1.firstName = "Prakhar";
student1.showEnrolledCourses = function () {
  console.log(courses);
}

// Iterating over all properties of student1 object
for (let prop in student1) {
  console.log(prop + " -> " + student1[prop]);
}*/

// using for...of loop
/*
const array = [1, 2, 3, 4, 5];
for (const item of array) {
  console.log(item);
} */

/* JavaScript Label Statement */
/*
let sum = 0, a = 1;

// label for outer loop
outerloop: while (true) {
  a = 1;

  // label for inner loop
  innerloop: while (a < 3) {
    sum += a;
    if (sum > 12) {

      // break outer loop form inner loop
      break outerloop;
    }
    console.log("sum = " + sum);
    a++;
  }
}
*/
/*
blockOfCode: {
  console.log("This part will be executed");
  break blockOfCode;
  console.log("This part will not be executed");
}
console.log("out of the block");
*/
/*
myLabel: function myLabeledFunction() {
  console.log("This is a labeled function.");
}
myLabeledFunction();
*/
console.log("Hello");
