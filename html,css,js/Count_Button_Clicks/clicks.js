document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById('click-me-btn');
    const displayArea = document.getElementById('display-area');
    let clickCount = 0;

    button.addEventListener('click', function() {
        clickCount++;
        displayArea.innerText = `Clicks: ${clickCount}`;
    });
});
