const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', onFormInput);

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
  const arhiv = JSON.stringify(value);
  localStorage.setItem(key, arhiv);
}

function loadFromLS(key) {
  const arhiv = localStorage.getItem(key);

  try {
    return JSON.parse(arhiv);
  } catch {
    return arhiv;
  }
}

function init() {
  const data = loadFromLS(STORAGE_KEY) || {};

  form.elements.email.value = data.email;
  form.elements.message.value = data.message;
}

init();
