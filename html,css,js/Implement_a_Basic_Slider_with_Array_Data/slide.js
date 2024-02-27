document.addEventListener("DOMContentLoaded", function() {
    const images = [
        'url_to_image1.jpg',
        'url_to_image2.jpg',
        'url_to_image3.jpg',
        // Add more image URLs as needed
    ];

    let currentIndex = 0; // Start with the first image

    // Initialize the slider with the first image
    const sliderImg = document.getElementById('slider-img');
    sliderImg.src = images[currentIndex];

    // Previous button functionality
    document.getElementById('prev-btn').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        sliderImg.src = images[currentIndex];
    });

    // Next button functionality
    document.getElementById('next-btn').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        sliderImg.src = images[currentIndex];
    });
});
