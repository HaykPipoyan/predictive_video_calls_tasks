document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const toggleDiv = document.getElementById('toggleDiv');

    toggleButton.addEventListener('click', function() {
        if (toggleDiv.style.display === "none") {
            toggleDiv.style.display = "block";
            toggleButton.textContent = "Hide"; // Optional: Change button text to "Hide"
        } else {
            toggleDiv.style.display = "none";
            toggleButton.textContent = "Show"; // Optional: Change button text to "Show"
        }
    });
});
