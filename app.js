// --------------LOADING PAGE ----------------------------

// Hide the loading page once the content is fully loaded with a delay
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loading').style.display = 'none';
    }, 1000); // Delay of 1000 milliseconds (1 second)
});

//----------------STARS -------------//
const NUM_STARS = 200;

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const duration = Math.random() * 5 + 5; // Random duration between 5s and 10s
    const delay = Math.random() * -20; // Random delay between -20s and 0s

    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    star.style.animationDuration = `${duration}s`;
    star.style.animationDelay = `${delay}s`;

    document.querySelector('.stars').appendChild(star);
}

for (let i = 0; i < NUM_STARS; i++) {
    createStar();
}

//----------------CONTACT FORM --------------------------
// Simple form validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Perform client-side validation
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
        return;
    }

    // Basic email format validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Simulate form submission
    alert('Your message has been sent successfully!');
    document.getElementById('contactForm').reset();
});

// Toggle hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

