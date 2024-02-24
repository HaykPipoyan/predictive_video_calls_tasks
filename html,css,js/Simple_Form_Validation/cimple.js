document.addEventListener('DOMContentLoaded', function() {
    const emailForm = document.getElementById('emailForm');
    emailForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting
        const emailInput = document.getElementById('email').value;

        if (!emailInput.trim()) { // Check if the email input is empty or contains only whitespace
            alert("Please enter an email address");
        } else {
            // If email is entered, you can proceed with form submission or additional validation
            alert("Email submitted successfully!"); // Placeholder action
            // Here, you could also include code to actually submit the form, such as using fetch() for an AJAX request.
        }
    });
});
