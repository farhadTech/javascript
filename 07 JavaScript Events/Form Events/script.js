// select form and input elements
const form = document.getElementById * ('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const nameError = document.getElementById('nameError');
const successMessage = document.getElementById('successMessage');

function validateForm(event) {
  event.preventDefault();

  let isValid = true;

  // reset error message
  nameError.textContent = '';
  emailErro.textContent = '';
  successMessage.textContent = '';

  // Validate name
  if (nameInput.value.trim() == '') {
    nameError.textContent = 'Name is required.';
    isValid = false;
  }
  else if (!isValidEmail(emailInput.value)) {
    emailError.textContent = "Please enter a valid email.";
    isValid = false;
  }

  if (isValid) {
    successMessage.textContent = 'Registration successful!';
    form.reset();
  }
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
  return re.test(email);
}

form.addEventListener('submit', validateForm);

nameInput.addEventListener('input', () => {
  nameError.textContent = nameInput.value.trim() === '' ? 'Name is required.' : '';
});

emailInput.addEventListener('input', () => {
  if (emailInput.value.trim() === '') {
    emailError.textContent = 'Email is required.';
  }
  else if (!isValidEmail(emailInput.value)) {
    emailError.textContent = 'Please enter a valid email.';
  }
  else {
    emailError.textContent = '';
  }
});

