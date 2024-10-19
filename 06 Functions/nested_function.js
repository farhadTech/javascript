/*
// example 1
function fun1(a) {
  function fun2(b) {
    return a + b;
  }
  return fun2;
}
function mainFun() {
  console.log(fun1("A programming snippet.")(" JavaScript"));
}

mainFun();

// example 2
function fun1(a) {
  fun = function fun2(b) {
    return a + b;
  }
  return fun;
}

function mainFun() {
  console.log(fun1("This is ")(" GFG"));
}
mainFun();
*/
