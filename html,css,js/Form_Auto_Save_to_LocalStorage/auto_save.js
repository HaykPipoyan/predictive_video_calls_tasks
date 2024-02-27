document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('myForm');
    const fields = form.querySelectorAll('input, textarea');
    const saveInterval = 1000; // Auto-save interval in milliseconds

    // Function to save form data to localStorage
    function saveFormData() {
        const formData = {};
        fields.forEach(field => {
            formData[field.name] = field.value;
        });
        localStorage.setItem('formData', JSON.stringify(formData));
    }

    // Function to restore form data from localStorage
    function restoreFormData() {
        const savedData = localStorage.getItem('formData');
        if (savedData) {
            const formData = JSON.parse(savedData);
            fields.forEach(field => {
                if (formData[field.name]) {
                    field.value = formData[field.name];
                }
            });
        }
    }

    // Throttle function to limit the frequency of auto-save calls
    function throttle(func, limit) {
        let lastSavedTime;
        return function() {
            const currentTime = new Date().getTime();
            if (!lastSavedTime || currentTime - lastSavedTime >= limit) {
                func();
                lastSavedTime = currentTime;
            }
        }
    }

    // Auto-save form data when a field is updated
    fields.forEach(field => {
        field.addEventListener('input', throttle(saveFormData, saveInterval));
    });

    // Restore form data from localStorage on page load
    restoreFormData();
});
