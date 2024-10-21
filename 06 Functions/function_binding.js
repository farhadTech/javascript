/* In JavaScript function binding happens using the Bind() method. With this method, we can bind an object to a common function, so that the function gives different result when needed. Otherwise, it gives the same result or gives an error while the code is executing. We use the Bind() method to call a function with 'this' value. */
/* What is 'this'?
'this' refers to the object it belongs to. The exact value fo 'this' depends on how a function is called. In a method, 'this' represents the object that the method was called on, while in a regular function, it typically refers to the global object (in the case of browser environments, it's the 'window' object).
*/
/*
// example 1
let geeks = {
  name: "ABC",
  printFunc: function () {
    console.log(this.name);
  }
}
geeks.printFunc();
*/
/*
// example 2
let geeks = {
	name: "ABC",
	printFunc: function () {
		console.log(this.name);
	}
}

let printFunc2 = geeks.printFunc;
printFunc2();
*/
/*
// example 3
let geeks = {
  name: "ABC",
  printFunc: function () {
    console.log(this.name);
  }
}
let printFunc2 = geeks.printFunc.bind(geeks);
printFunc2();
*/
/*
// example 4
let geeks1 = {
  name: "ABC",
  article: "C++"
};

let geeks2 = {
  name: "CDE",
  article: "JAVA"
};

let geeks3 = {
  name: "FGH",
  article: "C#"
}

function printVal() {
  console.log(this.name + " contributes about " + this.article + "<br>");
}

let printFunc2 = printVal.bind(geeks1);
printFunc2();

let printFunc3 = printVal.bind(geeks2);
printFunc3();

let printFunc4 = printVal.bind(geeks3);
printFunc4();
*/
