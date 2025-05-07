// Form Validation
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;
    
    if (!name || !email || !message) {
      alert('All fields are required!');
      return;
    }
    
    // Regex to validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    alert('Thank you for reaching out. We will get back to you shortly!');
    // You can replace the alert with actual form submission logic if needed.
  });
  