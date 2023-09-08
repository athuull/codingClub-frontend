'use strict';

// Variables
const joinNowBtn = document.getElementById('join-now-btn');
const loginModal = document.getElementById('login-modal');
const closeModal = document.getElementById('close-modal');
const aboutBtn = document.querySelector('.aboutNav');
const aboutSec = document.getElementById('about');
const contactBtn = document.querySelector('.contactNav');
const contactSec = document.getElementById('contact');
const eventsBtn = document.querySelector('.eventsNav');
const eventsSec = document.getElementById('events');
const membersBtn = document.querySelector('.membersNav');
const membersSec = document.getElementById('members');
const cursor = document.getElementById('blinking-cursor');
const typingText = document.getElementById('typing-text');

// Function for blinking cursor animation
function blinkCursor() {
    const cursor = document.getElementById('blinking-cursor');
    cursor.innerHTML = '<span>|</span>'; // Show cursor

    setInterval(function () {
        cursor.style.visibility = (cursor.style.visibility === 'hidden') ? 'visible' : 'hidden';
    }, 500); // Adjust blinking speed as needed (in milliseconds)
}

// Function for typing animation
function typeWelcomeMessage() {
    const text = "Welcome to the Coding Club.";
    const typingText = document.getElementById('typing-text');
    let i = 0;

    function type() {
        if (i <= text.length) {
            const char = text.charAt(i);
            if (char === '\n') {
                // Create a <br> element for a new line
                typingText.appendChild(document.createElement('br'));
            } else {
                // Create a <span> element for each character to keep cursor with it
                const charSpan = document.createElement('span');
                charSpan.textContent = char;
                typingText.appendChild(charSpan);
            }
            i++;
            setTimeout(type, 50); // Adjust typing speed as needed (in milliseconds)
        }
    }

    // Start typing animation
    type();
}

// Invoke the typing animation
typeWelcomeMessage();

// Rest of your code (event listeners, etc.)
joinNowBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
});

aboutBtn.addEventListener('click', function () {
    aboutSec.scrollIntoView({ behavior: "smooth" });
});

contactBtn.addEventListener('click', function () {
    contactSec.scrollIntoView({ behavior: "smooth" });
});

membersBtn.addEventListener('click', function () {
    membersSec.scrollIntoView({ behavior: "smooth" });
});

eventsBtn.addEventListener('click', function () {
    eventsSec.scrollIntoView({ behavior: "smooth" });
});

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll events and trigger animations
function handleScroll() {
    const cardElements = document.querySelectorAll('.fade-in-left');
    cardElements.forEach((card) => {
        if (isInViewport(card)) {
            card.classList.add('fade-in-visible');
        }
    });
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);

// Trigger initial check in case some cards are already in the viewport
handleScroll();


// Add more event listeners and code as needed
