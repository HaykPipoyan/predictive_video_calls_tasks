document.addEventListener('DOMContentLoaded', function() {
    const colorButtons = document.querySelectorAll('.color-button');

    colorButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const color = button.dataset.color;
            document.body.style.backgroundColor = color;
        });
    });
});
