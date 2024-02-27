document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('registration-form');
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();
        
        // Clear previous error messages
        document.getElementById('name-error').textContent = '';
        document.getElementById('email-error').textContent = '';
        
        // Flag to track validation status
        let isValid = true;
        
        // Validate Name
        const name = document.getElementById('name').value.trim();
        if (!name) {
            document.getElementById('name-error').textContent = 'Name is required.';
            isValid = false;
        }
        
        // Validate Email
        const email = document.getElementById('email').value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            document.getElementById('email-error').textContent = 'Email is required.';
            isValid = false;
        } else if (!emailRegex.test(email)) {
            document.getElementById('email-error').textContent = 'Please enter a valid email address.';
            isValid = false;
        }
        
        // If all validations pass, submit the form or do further processing
        if (isValid) {
            // Form is valid, you can submit it or do something else
            console.log('Form is valid. Name: ', name, ', Email: ', email);
            // For demonstration, let's just alert success
            alert('Form is valid. Submission can proceed!');
            // form.submit(); // Uncomment this to actually submit the form.
        }
    });
});
