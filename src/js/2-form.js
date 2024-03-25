const LOCAL_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('input', inputData);
form.addEventListener('submit', formSubmit);

let email = form.elements.email;
let message = form.elements.message;
let dataForm = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {
  email: '',
  message: '',
};

// email.value = dataForm.email;
// message.value = dataForm.message;

function inputData(event) {
  dataForm = { email: email.value.trim(), message: message.value.trim() };
  localStorage.setItem(LOCAL_KEY, JSON.stringify(dataForm));
}
function formSubmit(event) {
  event.preventDefault();

  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }

  console.log({ email: email.value.trim(), message: message.value.trim() });
  localStorage.removeItem(LOCAL_KEY);
  event.currentTarget.reset();
  // dataForm = {};
}
