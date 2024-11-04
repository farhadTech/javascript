const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e) {
  e.preventDefault();

  // get input value
  const newItem = document.getElementById('item').value;

  // create new li element
  const li = document.createElement('li');

  // add class
  li.className = 'list-group-item';

  // add text node with input value
  li.appendChild(document.createTextNode(newItem));
  itemList.appendChild(li);

  // create delete button element
  const deleteBtn = document.createElement('button');
  // add classes to delete button
  deleteBtn.className = 'btn';
  // append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  // append button to li
  li.appendChild(deleteBtn);
  // append li to list
  itemList.appendChild(li);

  console.log(li);
}

function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are You Sure?')) {
      const li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter items
function filterItems(e) {
  // convert to lower case
  const text = e.target.value.toLowerCase();
  // get list
  const items = itemList.getElementsByTagName('li');
  // Convert to an array.
  Array.from(items).forEach(function (item) {
    const itemName = item.firstChild.textContent;
    console.log(itemName);
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}



