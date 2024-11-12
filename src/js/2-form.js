'use strict';

const objectFromStore = localStorage.getItem('feedback-form-state') ?? '',
  inputInFormFields = document.querySelector('.feedback-form'),
  formData = { email: '', message: '' };

if (objectFromStore != '') {
  const savedFormData = JSON.parse(objectFromStore),
    email = inputInFormFields.elements.email,
    textarea = inputInFormFields.elements.message;
  email.value = formData.email = savedFormData.email;
  textarea.value = formData.message = savedFormData.message;
}

inputInFormFields.addEventListener('input', inputData);
inputInFormFields.addEventListener('submit', submitForm);

function inputData(e) {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function submitForm(e) {
  e.preventDefault();
  if (formData.email == '' || formData.message == '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    inputInFormFields.reset();
  }
}
