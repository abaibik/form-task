console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.formEntries(formData);

  console.log(data);

  event.target.reset();

  event.target.elements.firstName.focus();
});
