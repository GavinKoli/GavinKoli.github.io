document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    // Function to toggle the visibility of the navigation links
    navToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});
