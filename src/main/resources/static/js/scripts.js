document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('themeToggle');

    // Add event listener for toggle button
    themeToggle.addEventListener('click', function () {
        // Toggle the 'dark-mode' class on the <body>
        document.body.classList.toggle('dark-mode');

        // Optional: Save the theme preference to localStorage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // Optional: Load the theme preference from localStorage
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    AOS.init();
});

document.addEventListener('scroll', function () {
    const navbar = document.querySelector('.fancy-navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shrink');
    } else {
        navbar.classList.remove('shrink');
    }
});
