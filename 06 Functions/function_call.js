/*
// function call examples
function product(a, b) {
  return a * b;
}
let result = product.call(this, 20, 5);
console.log(result);


let employee = {
  details: function (designation, experience) {
    return this.name
      + " "
      + this.id
      + designation
      + experience;
  }
}

let emp1 = {
  name: "A",
  id: "123",
}
let emp2 = {
  name: "B",
  id: "456",
}
let x = employee.details.call(emp2, " Manager ", " 4 years");
console.log(x);
*/
