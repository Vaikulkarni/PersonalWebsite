const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');


form.addEventListener('submit', (event) => {
  event.preventDefault();


const formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
  };


console.log(formData);


// Clear the form fields
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
});