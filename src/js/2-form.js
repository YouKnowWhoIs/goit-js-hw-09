const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (email === '' || message === '') {
    return alert('All form fields must be filled in');
  }

  const data = {
    email,
    message,
  };

  console.log(data);

  form.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onFormInput() {
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  const data = {
    email,
    message,
  };

  saveToLS(STORAGE_KEY, data);
}

function saveToLS(key, value) {
  const serializedData = JSON.stringify(value);
  localStorage.setItem(key, serializedData);
}

function loadFromLS(key) {
  const serializedData = localStorage.getItem(key);

  try {
    return JSON.parse(serializedData);
  } catch {
    return null;
  }
}

function init() {
  const data = loadFromLS(STORAGE_KEY) || {};

  form.elements.email.value = data.email || '';
  form.elements.message.value = data.message || '';
}

init();
