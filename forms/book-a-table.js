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
      let name = form.querySelector('[name="name"]');
      let email = form.querySelector('[name="email"]');
      let phone = form.querySelector('[name="phone"]');
      let date = form.querySelector('[name="date"]');
      let time = form.querySelector('[name="time"]');
      let people = form.querySelector('[name="people"]');
      let message = form.querySelector('[name="message"]');
  
      // Check if all fields are filled
      if (!name.value || !email.value || !phone.value || !date.value || !time.value || !people.value || !message.value) {
        displayError(form, 'Please fill out all fields');
        return false;
      }
  
      // Custom validation for email
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
  
    function sendWhatsapp() {
        var noWa = document.querySelector('.noWa').value;
        var name = document.querySelector('[name="name"]').value;
        var ph = document.querySelector('[name="phone"]').value;
        var email = document.querySelector('[name="email"]').value;
        var date = document.querySelector('[name="date"]').value;
        var time = document.querySelector('[name="time"]').value;
        var people = document.querySelector('[name="people"]').value;
        var subject = document.querySelector('[name="message"]').value;
      
        var url = "https://wa.me/" + noWa + "?text=" +
            "*Name :* " + name + "%0a" +
            "*Email :* " + email + "%0a" +
            "*Phone number :* " + ph + "%0a" +
            "*Date :* " + date + "%0a" +
            "*Time :* " + time + "%0a" +
            "*Number of People :* " + people + "%0a" +
            "*Message :* " + subject + "%0a%0a";
        window.open(url, '_blank').focus();
      }
      
  })();
  