//Task 2: Write JavaScript code to handle form submissions and store user input in an object.
function handleSubmit(event) {
  event.preventDefault(); // Prevent default form submission

  const formData = new FormData(event.target);
  const dataObject = {};

  // Iterate over form data entries
  for (const [key, value] of formData.entries()) {
    dataObject[key] = value;
  }

  console.log(dataObject);
}

// Attach the event listener to the form
const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);


