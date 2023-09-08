'use strict';

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

window.onload = function () {
    const text = "Welcome to the Coding Club.";
    const cursor = document.getElementById('blinking-cursor');
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

    // Check screen width and decide whether to show the blinking cursor
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (screenWidth > 768) {
        // Only add the blinking cursor on screens wider than 768px
        type();

        // Start the blinking cursor animation
        setInterval(function () {
            cursor.style.visibility = (cursor.style.visibility === 'hidden') ? 'visible' : 'hidden';
        }, 500); // Adjust blinking speed as needed (in milliseconds)
    }
};

// JavaScript for opening and closing the login modal

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
