// select elements
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');

// click event
box1.addEventListener('click', function () {
  box1.style.backgroundColor = 'blue';
  box1.textContent = 'Clicked!';
  console.log("Box 1 was clicked!");
});

// Mouseover events
box2.addEventListener('mouseover', function () {
  box2.style.backgroundColor = 'orange';
  box2.textContent = 'Mouse Over!';
  console.log("Mouse entered Box 2");
});

// Mouseout events
box2.addEventListener('mouseout', function () {
  box2.style.backgroundColor = '#4CAF50';
  box2.textContent = 'Hover Over Me';
  console.log('Mouse left Box 2');
});

// Mousemover event
box3.addEventListener('mousemove', function (event) {
  box3.style.backgroundColor = `rgb(${event.clientX % 255}, ${event.clientY % 255}, 150)`;
  box3.textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
  console.log(`Mouse moved at (${event.clientX}, ${event.clientY})`);
});

