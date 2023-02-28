
console.log('Hola Mundo!')

const form = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  form.addEventListener('submit', function(event) {
    if (!nameInput.checkValidity()) {
      nameInput.classList.add('is-invalid');
      event.preventDefault();
    } else {
      nameInput.classList.remove('is-invalid');
    }

    if (!emailInput.checkValidity()) {
      emailInput.classList.add('is-invalid');
      event.preventDefault();
    } else {
      emailInput.classList.remove('is-invalid');
    }

    if (!messageInput.checkValidity()) {
      messageInput.classList.add('is-invalid');
      event.preventDefault();
    } else {
      messageInput.classList.remove('is-invalid');
    }
  });
