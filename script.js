'use strict'
const joinNowBtn = document.getElementById('join-now-btn');
const loginModal = document.getElementById('login-modal');
const closeModal = document.getElementById('close-modal');
window.onload = function () {
    const text = "Welcome to the Coding Club.";
    const cursor = document.getElementById('blinking-cursor');
    const typingText = document.getElementById('typing-text');
    
    let i = 0;
    function type() {
    if (i < text.length) {
    typingText.textContent += text.charAt(i);
    i++;
    setTimeout(type, 100); // Adjust typing speed as needed (in milliseconds)
    }
    }
    // Start the typing animation when the page loads
    type();
    // Start the blinking cursor animation
    setInterval(function () {
    cursor.style.visibility = (cursor.style.visibility === 'hidden') ? 'visible' : 'hidden';
    }, 500); // Adjust blinking speed as needed (in milliseconds)
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
