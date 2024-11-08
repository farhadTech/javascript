
/*** Arrays and Object */
// Array Basics
/* Arrays are special type fo object and data structure in JavaScript that stores multiple values. */
/*
const arr = [374, 755, 398, 118, 289];

let x;
// Array Literal
const numbers = [12, 45, 33, 29, 39];
console.log(numbers);
x = numbers[0];
x = numbers[0] + numbers[3];

// Array constructor
const fruits = new Array('Apple', 'Grape', 'Orange');
console.log(fruits);
x = `My Favourite fruit is ${fruits[2]}`;

console.log(x);

// Mixed Array
const mixed = [12, 'Hello', true, null];
console.log(mixed);

x = mixed.length;
console.log(`Array length is: ${x}`);

// update array
fruits[2] = 'pear';
x = fruits;
console.log(x);

// add at the end
console.log(fruits.length);
fruits[3] = 'strawberry';
fruits[fruits.length] = 'blueberry';
console.log(fruits);
*/

/***** Array Methods */
/*
const arr = [34, 55, 95, 20, 15];
console.log(arr);

// add element at the end of the array
arr.push(100);
console.log(arr);

// pop element at the end from the array
arr.pop();
console.log(arr);

// add element at the start of the array
arr.unshift(99);
console.log(arr);

// remove element at the start of the array
arr.shift();
console.log(arr);

// reverse array
arr.reverse();
console.log(arr);

let x;
// arr.includes(value): check if the value is present in the array then it gives true otherwise it gives false
x = arr.includes(20);
console.log(x);

x = arr.includes(23);
console.log(x);

// arr.indexOf(value) gives index of the value if present otherwise it gives -1
x = arr.indexOf(34);
console.log(x);

x = arr.indexOf(54);
console.log(x);

// arr.slice(startIndex, EndIndex): it gives the value (not including end) from start to end and not changing the original array.
x = arr.slice(2, 4);
console.log(x);
console.log(x, arr);

// arr.splice(startIndex, numberOfValues, newElement(s))
x = arr.splice(1, 4);
console.log(x);
console.log(arr);

x = arr.splice(3, 1, 4);
console.log(x);
*/

/*** Mdn splice */
// The splice method of Array instances changes the contents of an array by removing or replacing existing elements and / or adding new elements in place.
// To create a new array with a segment removed and/or replaced without mutating the original array, use toSpliced(). To access part of an array without modifying it.

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months);


/* Syntax
splice(start)
splice(start, deleteCount);
splice(start, deleteCount, item1);
splice(start, deleteCount, item1, item2);
splice(start, deleteCount, item1, item2, .... itemN);
*/

/* Parameters:
start:
Zero-based index at which to start changing the array, converted to an integer.
  * Negative index counts back from the end of the array --if array.length <= start < 0, start + array.length is used.
  * If start < array.length, 0 is used.
  * If start >= array.length, no element will be deleted, but the method will behave as an adding function, adding as many elements as provided.
  * If start is omitted (and splice() is called with no arguments) nothing is deleted. This is different from passing undefined, which is converted to 0.

deleteCount: (optional)
  An integer indicating the number of elements in the array to remove from start.
  If deleteCount is omitted, or if its value is greater than or equal to the number of elements after the position specified by start, then all the elements from start to the end of the array will be deleted. However, if you wish to pass any itemN parameter, you should pass Infinity as deleteCount to delete all elements after start, because an explicit undefined gets converted to 0.

  If deleteCount is 0 or negative, no elements are removed. In this case, you should specify at lease one new element (see below).


Return value:
An array containing the deleted elements.
If only one element is removed, an array of one element is returned.
If no elements are removed, an empty array is returned.

Description:
The splice() method is a mutating method. It may change the content of this. If the specified number of elements to insert differs from the number of elements being removed, the array's length will be changed as well. The the same time, it uses [Symbol.species] to create a new array instance to be returned.
d