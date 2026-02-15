// script.js

// Smooth Scrolling
const smoothScroll = (target) => {
    const element = document.querySelector(target);
    element.scrollIntoView({ behavior: 'smooth' });
};

// Navigation Interaction
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetID = link.getAttribute('href');
        smoothScroll(targetID);
    });
});

// Responsive Menu
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
