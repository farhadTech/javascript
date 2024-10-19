/* A generator function uses the yield keyword to generate values, pausing execution and sending values to the caller. It retains the state to resume execution after yield, continuing immediately after the last yield run.
*/
/*
// example 1
// generate function generates three different numbers in three calls.
function* fun() {
  yield 10;
  yield 20;
  yield 30;
}
// calling the generate function
let gen = fun();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

// example 2
function* nextNatural() {
  let naturalNumber = 1;

  while (true) {
    yield naturalNumber++;
  }
}

let gen2 = nextNatural();
for (let i = 0; i < 10; i++) {
  console.log(gen2.next().value);
}

// example 3
let array = ['a', 'b', 'c'];
function* generator(arr) {
  let i = 0;
  while (i < arr.length) {
    yield arr[i++];
  }
}
const it = generator(array);
console.log(it);

const arr = ['a', 'b', 'c'];
function* generator() {
  yield 1;
  yield* arr;
  yield 2;
}
for (let value of generator()) {
  console.log(value);
}

// example 5
let createOwnIterable = {
  *[Symbol.iterator]() {
    yield 'a';
    yield 'b';
    yield 'c';
  }
}

for (let value of createOwnIterable) {
  console.log(value);
}

// example 6
function* generator() {
  yield 'a';
  return 'result';
  yield 'b';
}
let it2 = generator();
console.log(JSON.stringify(it2.next()));
console.log(JSON.stringify(it2.next()));
/*
// example 7
function* generator() {
  throw new Error('Error Occured');
}
const it3 = generator();
it3.next();
*/
/*
// example 8
function* firstGenerator() {
  yield 2;
  yield 3;
}
function* secondGenerator() {
  yield 1;
  yield* firstGenerator();
  yield 4;
}

for (let value of secondGenerator()) {
  console.log(value);
}
*/

/*
// example 9
function* generator() {
  ['a', 'b', 'c'].forEach(value => yield value); // syntax error
} */
/*
// example 10
const firstPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 5000);
  });
};

const secondPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 3000);
  });
};

async function* generator() {
  const firstPromiseResult = await firstPromise();
  yield firstPromiseResult;

  const secondPromiseResult = await secondPromise();
  yield secondPromiseResult;
}

// Wrap the loop in an async function
async function runGenerator() {
  let it = generator();
  for await (let value of it) {
    console.log(value); // Logs the values 1 and 2 with delays in between
  }
}

runGenerator(); // Call the async function to execute the generator
*/
