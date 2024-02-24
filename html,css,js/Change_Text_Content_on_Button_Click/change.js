document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('changeTextBtn');
    const paragraph = document.getElementById('textParagraph');

    btn.addEventListener('click', function() {
        paragraph.textContent = "The text has been changed!";
    });
});
