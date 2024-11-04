/****** Arrays */
/* Collection of items: */
/* Array store values in key value pairs. index are key and data's are values*/

// let heroes = ["Ironman", "hulk", "thor", "batman"];
// let marks = [96, 75, 48, 83, 66];
// let info = ["rahul", 86, "delhi"];
// console.log(info);

// // for loop
// for (let index = 0; index < info.length; index++) {
//   console.log(info[index]);
// }

// console.log("");
// // for-of loop
// for (let hero of heroes) {
//   console.log(hero);
// }

// // for-in loop
// for (let ind in marks) {
//   let values;
//   values = marks[ind]
//   ind++;
//   console.log(`index = ${ind}, values = ${values}`);
// }

// console.log("");
// let cities = ["delhi", "pune", "mumbai", "hyderabad", "gurgaon"];
// for (let city of cities) {
//   console.log(city);
// }
// console.log("");
// for (let city of cities) {
//   console.log(city.toUpperCase());
// }

/* For a given array with marks of students -> [85, 97, 22, 32, 12, 79, 60]. Finds the average marks of the entire class. */
// console.log("");
// marks = [96, 75, 48, 83, 66];
// let sum = 0;
// for (let m of marks) {
//   sum += m;
// }
// let avg = sum / marks.length;
// console.log(sum);
// console.log(`avg marks of the class = ${avg}`);

/* Find the discounted price of a given array, and calculate price and given discount store final result in the same array. */

// let price = [250, 645, 300, 900, 50];
// console.log(price);
// for (let i = 0; i < price.length; i++) {
//   let offer = price[i] / 10;
//   price[i] = price[i] - offer;
// }
// console.log(price);


/****** Array Methods: */
/*
push() : add to end.
pop() : delete from end and return.
toString() : converts array to string.
*/

// let vegetables = ["potato", "garlic", "cabbage", "onion", "tomato"];
// vegetables.push("carrot"); // add a new values at the end fo the array.
// console.log(vegetables);
// vegetables.pop();
// console.log(vegetables);

// let deletedItem = vegetables.pop();
// console.log(`Deleted Item is: ${deletedItem}`);
// console.log(vegetables);

// // toString() => converts an array to string.
// console.log(vegetables.toString());

// let marks = [97, 85, 54, 36];
// console.log(marks.toString());

// // concat() => joins multiple arrays and return result.
// let marvel_heroes = ["thor", "spider-man", "iron-man"];
// let dc_heroes = ["superman", "batman"];
// let indian_heroes = ["shaktiman", "Krish"];

// // we can concatenate multiple strings too.
// let heroes = marvel_heroes.concat(dc_heroes, indian_heroes);
// console.log(heroes);

// // unshift(): add to start.
// // shift(): delete to start.
// // slice(): returns a piece of the array. slice(startIndex, endIndex);
// // splice(): change original array-> (add, remove, replace)

// heroes.unshift("antman"); // add values at the start.
// console.log(heroes);

// let val = heroes.shift(); // delete to start
// console.log("deleted: ", val);
// console.log(heroes);

// // splice() : change original array(add, remove, replace)
// // splice(startIdx, delCount, newElement)
// let arr = [0, 1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// arr.splice(2, 2);
// console.log(arr);
// arr.splice(2, 0, 100, 200);
// console.log(arr);

// // element add
// arr.splice(2, 0, 100);
// console.log(arr);

// // delete element.
// arr.splice(3, 1);

// // replace element
// arr.splice(2, 1, 50);
// console.log(arr);

// arr.splice(3); // deleted all elements after this given index.
// console.log(arr);

// /* Create an array to store companies => "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix".

// a. Remove the first company from the array.
// b. Remove Uber and add Ola in its place.
// c. Add Amazon at the end.
// */

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// // a. removing first company from the array.
// let remove_val = companies.shift();
// console.log(remove_val);
// console.log(companies);
// // b. remove Uber and add Ola in its place.
// companies.splice(1, 1, "Ola");
// console.log(companies);
// // c. add Amazon at the end.
// companies.push("Amazon");
// console.log(companies);

