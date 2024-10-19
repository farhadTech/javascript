const circle = document.getElementById('circle');
const keyDisplay = document.getElementById('keyDisplay');

let positionX = 50;
let positionY = 50;

function moveCircle(xChange, yChange) {
  positionX += xChange;
  positionY += yChange;

  positionX = Math.max(0, Math.min(positionX, 90));
  positionY = Math.max(0, Math.min(positionY, 90));

  circle.style.transform = `translate(${positionX}vw, ${positionY}vh)`;
}

function resetCircle() {
  positionX = 50;
  positionY = 50;
  moveCircle(0, 0);
  changeColor('#3498db');
  keyDisplay.textContent = "Last key pressed: None";
}

document.addEventListener('keydown', function (event) {
  keyDisplay.textContent = `Last key pressed: ${event.key}`;

  switch (event.key) {
    case 'ArrowUp':
      moveCircle(0, -5);
      break;
    case 'ArrowDown':
      moveCircle(0, 5);
    case 'ArrowLeft':
      moveCircle(-5, 0);
    case 'ArrowRight':
      moveCircle(5, 0);
      break;
    case 'r':          // Change color to red
            changeColor('#e74c3c');
            break;
        case 'g':          // Change color to green
            changeColor('#2ecc71');
            break;
        case 'b':          // Change color to blue
            changeColor('#3498db');
            break;
        case 'Escape':     // Reset circle
            resetCircle();
            break;
        default:
            console.log(`Key "${event.key}" is not handled.`);
  }
})