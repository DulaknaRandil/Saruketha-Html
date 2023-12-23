// Enhanced form submission with validation
(function () {
  "use strict";

  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      // Validate WhatsApp fields
      if (validateWhatsAppFields(form)) {
        // Submit the form data
        console.log('Submitting form data...');
        submitFormData(form);

        // Call sendWhatsapp function after successful validation
        sendWhatsapp();
      } else {
        console.log('Form not submitted due to validation failure');
      }
    });
  });

  function validateWhatsAppFields(form) {
    let noWa = form.querySelector('.noWa');
    let name = form.querySelector('.name');
    let ph = form.querySelector('.tphone');
    let email = form.querySelector('.gemail');
    let message = form.querySelector('.message');

    // Check if all fields are filled
    if (!noWa.value || !name.value || !ph.value || !email.value || !message.value) {
      displayError(form, 'Please fill out all WhatsApp fields');
      return false;
    }

    // Check if the email is in the correct format
    if (!isValidEmail(email.value)) {
      displayError(form, 'Please enter a valid email address');
      return false;
    }

    return true;
  }

  function isValidEmail(email) {
    // Regular expression for validating an Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function displayError(form, error) {
    // Display the error in the console for debugging
    console.error(error);

    // You can also display an error message on the form if needed
    // Example: form.querySelector('.error-message').innerText = error;
  }

  function submitFormData(form) {
    // Display success message
    console.log('Form data submitted successfully');
    form.querySelector('.sent-message').classList.add('d-block');

    // Reset the form after a delay (adjust as needed)
    setTimeout(function () {
      form.querySelector('.sent-message').classList.remove('d-block');
      form.reset();
    }, 4000);
  }

})();
