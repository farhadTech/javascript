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

/* Set in JavaScript */
/*
let set1 = new Set(["sumit", "sumit", "amit", "anil", "anish"]);
let set2 = new Set("foooooooood");
let set3 = new Set([10, 20, 30, 30, 40, 40]);
let set4 = new Set();
*/

// add
/*
let set1 = new Set();
set1.add(10);
set1.add(20);

set1.add(30).add(40).add(50);
console.log(set1);
*/

// delete
/*
let set1 = new Set("foooodiiiieeee");
console.log(set1.delete('e'));
console.log(set1);
console.log(set1.delete('g'));
*/

//clear
/*
let set1 = new Set([10, 20, 30, 40, 50]);
console.log(set1);
set1.clear();
console.log(set1);
*/

//set.entries
/*
let set1 = new Set();
set1.add(50);
set1.add(30);
set1.add(40);
set1.add(20);
set1.add(10);

let getEntriesArray = set1.entries();

console.log(getEntriesArray.next().value);
console.log(getEntriesArray.next().value);
console.log(getEntriesArray.next().value);
*/

//set.has()
/*
let set1 = new Set();
set1.add(50);
set1.add(30);
console.log(set1.has(50));
console.log(set1.has(10));
*/

// set.values();
// set.keys();
/*
let set1 = new Set();
set1.add(50);
set1.add(30);
set1.add(40);
set1.add("Geeks");
set1.add("GFG");

let getValues = set1.values();
console.log(getValues);

let getKeys = set1.keys();
console.log(getKeys);
*/

//set.forEach();
//Set.prototype[@@iterator]()
/*
let set1 = new Set(["sumit", "sumit", "amit", "anish"]);
let getit = set1[Symbol.iterator]();
console.log(getit.next());
console.log(getit.next());
console.log(getit.next());
console.log(getit.next());
*/

/* set operations in javaScript */
// js subSet() method
/*
Set.prototype.subSet = function (otherSet) {
  if (this.size > otherSet.size) {
    return false;
  }
  else {
    for (let elem of this) {
      if (!otherSet.has(elem))
        return false;
    }
    return true;
  }
}

let setA = new Set([10, 20, 30]);
let setB = new Set([50, 60, 10, 20, 30, 40]);
let setC = new Set([10, 30, 40, 50]);

console.log(setA.subSet(setB));
console.log(setA.subSet(setC));
console.log(setC.subSet(setB));
*/
/*
// javaScript union() method
Set.prototype.union = function (otherSet) {
  let unionSet = new Set();

  for (let elem of this) {
    unionSet.add(elem);
  }

  for (let elem of otherSet)
    unionSet.add(elem);
  return unionSet;
}

let set1 = new Set([10, 20, 30, 40, 50]);
let set2 = new Set([40, 50, 60, 70, 80]);

let unionSet = set1.union(set2);
console.log(unionSet.values());
*/
/*
// javaScript intersection method
Set.prototype.intersection = function (otherSet) {
  let intersectionSet = new Set();

  for (let elem of otherSet) {
    if (this.has(elem))
      intersectionSet.add(elem);
  }
  return intersectionSet;
}

let set1 = new Set([10, 20, 30, 40, 50]);
let set2 = new Set([40, 50, 60, 70, 80]);

let intersectionSet = set1.intersection(set2);

console.log(intersectionSet.values());
*/
/*
// javaScript difference method
Set.prototype.difference = function (otherSet) {
  let differenceSet = new Set();

  for (let elem of this) {
    if (!otherSet.has(elem)) {
      differenceSet.add(elem);
    }
  }
  return differenceSet;
}

let set1 = new Set([10, 20, 30, 40, 50]);
let set2 = new Set([40, 50, 60, 70, 80]);

let differenceSet = set1.difference(set2);
console.log(differenceSet);
*/
