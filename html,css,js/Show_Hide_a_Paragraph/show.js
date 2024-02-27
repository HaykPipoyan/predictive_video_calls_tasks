document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById('toggle-button');
    const paragraph = document.getElementById('paragraph');

    button.addEventListener('click', function() {
        if (paragraph.style.display === 'none') {
            paragraph.style.display = 'block';
            button.textContent = 'Hide';
        } else {
            paragraph.style.display = 'none';
            button.textContent = 'Show';
        }
    });
});
