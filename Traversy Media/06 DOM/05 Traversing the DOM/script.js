let output;
// get child from parents
const parent = document.querySelector('.parent');
output = parent.children;
output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;

parent.children[1].innerText = 'child two';
parent.children[1].style.color = 'red';

parent.firstElementChild.innerText = 'child one';
parent.lastElementChild.innerText = 'child Three';

// get parent elemnents from child.
const child = document.querySelector('.child');
child.parentElement.style.border = '1px solid #ccc';
child.parentElement.style.padding = '10px';

output = child.parentElement;
// console.log(output);


// get sibling element.
const secondItem = document.querySelector('.child:nth-child(2)');
output = secondItem.innerText = 'second Item';
output = secondItem.nextElementSibling.innerText = 'next sibling';
secondItem.nextElementSibling.style.color = 'green';
secondItem.previousElementSibling.style.color = 'orange';
console.log(output);
