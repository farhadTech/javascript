/*
let map1 = new Map([
  [1, 2],
  [2, 3],
  [4, 5]
]);

console.log("Map1 ");
console.log(map1);

let map2 = new Map([
  ["firstname", "sumit"],
  ["lastname", "ghosh"],
  ["website", "geeksforgeeks"]
]);

console.log("map2: ");
console.log(map2);

let mp = new Map();
mp.set("FirstName", "Shobhit");
mp.set("LastName", "Sharma");
mp.set("Website", "GeeksForGeeks");

console.log(mp);
*/
/*
let map = new Map();
map.set("first name: ", "sumit");
map.set("last name: ", "ghosh");
map.set("website", "GeeksforGeeks")
  .set("friend 1", "Gaurav")
  .set("friend 2", "Saurav");

console.log(map);
console.log("map has website ? " + map.has("website"));
console.log("map has friend 3 ? " + map.has("friend 3"));
console.log("Get value for key website " + map.get("website"));
console.log("Get value for key friend 3 " + map.get("friend 3"));
console.log("delete element with key website " + map.delete("website"));
console.log("map has website ? " + map.has("website"));
console.log("delete element with key website " + map.delete("friend 3"));
map.clear();
console.log(map);
*/

/*
// sets in javaScript
let set1 = new Set(["sumit", "sumit", "amit", "anil", "anish"]);
console.log(set1);
let set2 = new Set("fooooood");
console.log(set2);
let set3 = new Set([10, 20, 30, 30, 40, 40]);
console.log(set3);
let set4 = new Set();
console.log(set4);
*/

// Methods of set in JavaScript
// set.add()
let set1 = new Set();
set1.add(10);
set1.add(20);
set1.add(30).add(40).add(50);
console.log(set1);

let set2 = new Set("foooodiiiieee");
console.log(set2.delete('e'));
console.log(set2);
console.log(set2.delete('g'));

let set3 = new Set([10, 20, 30, 40, 50]);
console.log(set3);
set3.clear();
console.log(set3);

let set4 = new Set();
set4.add(50);
set4.add(30);
set4.add(40);
set4.add(20);
set4.add(10);


let getEntriesArray = set4.entries();
console.log(getEntriesArray.next().value);
console.log(getEntriesArray.next().value);
console.log(getEntriesArray.next().value);

let set5 = new Set();
set5.add(50);
set5.add(30);
console.log(set5.has(50));
console.log(set5.has(10));

// set values and keys
let set6 = new Set();
set6.add(50);
set6.add(30);
set6.add(40);
set6.add("Geeks");
set6.add("GFG");

let getValues = set6.values();
console.log(getValues);

let getKeys = new set6.keys();
console.log(getKeys);
