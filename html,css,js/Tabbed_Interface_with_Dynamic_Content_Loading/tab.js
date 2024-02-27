document.addEventListener("DOMContentLoaded", function() {
    const tabsContent = {
        'tab1': 'Content for Tab 1: Lorem ipsum dolor sit amet.',
        'tab2': 'Content for Tab 2: Consectetur adipiscing elit.',
        'tab3': 'Content for Tab 3: Sed do eiusmod tempor incididunt.'
    };

    const tabs = document.querySelectorAll('.tab-link');
    const contentDiv = document.getElementById('tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to the clicked tab
            this.classList.add('active');
            // Set the content div to the content of the clicked tab
            const selectedTab = this.getAttribute('data-tab');
            contentDiv.textContent = tabsContent[selectedTab];
        });
    });
});
