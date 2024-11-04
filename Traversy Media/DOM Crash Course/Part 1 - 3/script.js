// EXAMINE THE DOCUMENT OBJECT

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 'test';
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[4]);
// document.all[6].textContent = 'Hello';
// console.log(document.forms);
// console.log(document.links);
// console.log(document.forms[0]);


/***** Selectors */
// getElementById();
// console.log(document.getElementById('header-title').innerHTML);
// const headerTitle = document.getElementById('header-title');
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'GoodBye';
// headerTitle.innerHTML = '<h3>ITEM SAYS HELLO'
// const header = document.getElementById('main-header');
// header.style.borderBottom = '3px solid green';

/* gelElementByClassName() */
// const listItems = document.getElementsByClassName('list-group-item');
// console.log(listItems);
// console.log(listItems[1]);
// listItems[2].innerText = 'Hello 2';
// listItems[2].style.fontWeight = 'bold';
// listItems[2].style.backgroundColor = 'green';

// for (let i = 0; i < listItems.length; i++) {
//   listItems[i].style.backgroundColor = '#f4f4f4';
// }

/** Query Selector */
// const header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px green';

// const input = document.querySelector('input');
// input.value = 'Hello World';

// const submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// const item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// const lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// const secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';


// /** Query Selector All */
// const titles = document.querySelector('.title');
// console.log(titles.textContent);

// const odd = document.querySelectorAll('li:nth-child(odd)');
// const even = document.querySelectorAll('li:nth-child(even)');

// for (let i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }

/****** Traversing the DOM */
// const itemList = document.querySelector('#items');

// // parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);


// // parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';

/* parentNode and parentElement for the most part is inter-changeable.
*/

// childNode and children
// const itemList = document.querySelector('#items');
// // console.log(itemList.childNodes);
// console.log(itemList.children);
// itemList.children[1].style.backgroundColor = 'coral';


// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// lastChild
// console.log(itemList.lastChild);
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';


// Sibling
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);

// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// // Create a Div
// const newDiv = document.createElement('div');
// // add a className
// newDiv.className = 'hello';
// // add a id
// newDiv.id = 'hello1';
// newDiv.setAttribute('title', 'hello div');

// // create a text node
// const newDivText = document.createTextNode('Hello World');

// // add text to div
// newDiv.appendChild(newDivText);
// console.log(newDiv);

// const container = document.querySelector('header', 'container');
// const h1 = document.querySelector('header h1');
// container.insertBefore(newDiv, h1);
// newDiv.style.fontSize = '30px';


/***** Events */
// function buttonClicked() {
//   console.log("Button Clicked");
// }

// const button = document.getElementById('button').addEventListener('click', buttonClicked);

// function buttonClick() {
//   document.getElementById('header-title').textContent = "Changed";
//   document.querySelector('#main').style.backgroundColor = 'lightGray';
// }

// function buttonClicked(e) {
  // console.log(e);
  // console.log(e.target);
  // console.log(e.target.id);
  // console.log(e.target.className);
  // console.log(e.target.classList);
  // const output = document.getElementById('output');
  // output.innerHTML = '<h3> '+e.target.id+' </h3>';
  // console.log(e.type);

  // console.log(e.clientX);
  // console.log(e.clientY);

  /* client from the browser/window and offset is the element itself. */
  // console.log(e.offsetX);
  // console.log(e.offsetY);

  // console.log(e.altKey);
  // console.log(e.ctrlKey);
  // console.log(e.shiftKey);
// }

// const button = document.getElementById('button');
// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);


// const box = document.getElementById('box');
// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

// const box = document.getElementById('box');
// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

// const box = document.getElementById('box');
// box.addEventListener('mousemove', runEvent);

// function runEvent(e) {
  // console.log("EVENT TYPE: " + e.type);
  // output.innerHTML = '<h3>MouseX: ' + e.offsetX + '</h3><h3>MouseY: ' + e.offsetY + '</h3>';
//   box.style.backgroundColor = "rgb(" + e.offsetX + ", " + e.offsetY + ",40)";
// }


/****** Keyboard and input events */
const itemInput = document.querySelector('input[type="text"]');


document.addEventListener('change', runEvent);
// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

itemInput.addEventListener('cut', runEvent);
itemInput.addEventListener('paste', runEvent);

const form = document.querySelector('form');
const event = document.querySelector('select');

form.addEventListener('submit', runEvent);

function runEvent(e) {
  e.preventDefault();
  console.log('Event type: ' + e.type);
  // console.log(e.target.value);
  // document.getElementById('output').innerHTML = '<h3>' +e.target.value+ '</h3>';
  // document.body.style.display = 'none';

}
