// select the box element
const box = document.getElementById('movingBox');

// Track mousemove to move the box with the cursor
document.addEventListener('mousemove', function (event) {
  const x = event.clientX;
  const y = event.clientY;

  // Position the box at the mouse coordinates
  box.style.left = `${x}px`;
  box.style.top = `${y}px`;
});

// Handle mousedown (when mouse button is pressed)
box.addEventListener('mousedown', function () {
  box.classList.add('active');
});

// Handle mouseup (when mouse button is released)
box.addEventListener('mouseup', function () {
  box.classList.remove('active');
});

// Handle click (randomely move the box)
box.addEventListener('click', function () {
  // Randomely generate new positions within the viewport
  const newX = Math.random() * (window.innerWidth - 100);
  const newY = Math.random() * (window.innerWidth - 100);

  // Update box position
  box.style.left = `${newX}px`;
  box.style.top = `${newY}px`;
});

// change background color based on mouse postion
document.addEventListener('mousemove', function (event) {
  const red = Math.round((event.clientX / window.innerWidth) * 255);
  const green = Math.round((event.clientY / window.innerHeight) * 255);
  const blue = 150;

  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});
