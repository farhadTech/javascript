const box = document.getElementById('box');

let positionX = 50;
let positionY = 50;

function moveBox(xchange, ychange) {
  positionX += xchange;
  positionY += ychange;

  // ensure the box stays within the viewport
  positionX = Math.min(Math.max(positionX, 0), 90);
  positionY = Math.min(Math.max(positionY, 0), 90);

  // Update the position of the box
  box.style.transform = `translate(${positionX}vw, ${positionY}vh)`;
}

// Add event Listener for keydown
document.addEventListener('keydown', function (event) {
  switch (event.key) {
    case 'ArrowUp':
      moveBox(0, -5);
      break;
    case 'ArrowDown':
      moveBox(0, 5);
      break;
    case 'ArrowLeft':
      moveBox(-5, 0);
      break;
    case 'ArrowRight':
      moveBox(5, 0);
      break;
    case 'b':
      document.body.style.backgroundColor = '#3498db';
      break;
    case 'g':
      document.body.style.backgroundColor = '#2ecc71';
      break;
    case 'r':
      document.body.style.backgroundColor = '#e74c3c';
      break;
    case 'Escape':
      document.body.style.backgroundColor = '#f0f0f0';
      positionX = 50;
      positionY = 50;
      moveBox(0, 0);
      break;
    default:
      console.log(`key "${event.key}" pressed`);
  }
});

// Add event listener for keyup
document.addEventListener('keyup', function (event) {
  console.log(`key released: ${event.key}`);
})
