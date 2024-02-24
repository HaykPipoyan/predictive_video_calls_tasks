document.addEventListener('DOMContentLoaded', function() {
    const displayButton = document.getElementById('displayButton');
    displayButton.addEventListener('click', function() {
        const inputField = document.getElementById('inputField').value;
        document.getElementById('displayText').innerText = inputField;
    });
});
