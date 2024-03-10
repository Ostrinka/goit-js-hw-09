const form = document.querySelector(".feedback-form");
const saveFormData = () => {
  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};
const loadForm = () => {
  const savedData = localStorage.getItem("feedback-form-state");
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    form.elements.email.value = email || '';
    form.elements.message.value = message || '';
  }
};
form.addEventListener("input", saveFormData);
window.addEventListener("load", loadForm);
form.addEventListener("submit", event => {
  event.preventDefault();
  localStorage.removeItem("feedback-form-state");
  if (form.elements.email.value === "" || form.elements.message.value === "") {
    alert("All form fields must be filled in");
  }
  else {
    console.log({
      email: form.elements.email.value.trim(),
      message: form.elements.message.value.trim(),
    });
  form.reset();}
});