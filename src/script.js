'use strict';

import {initializeApp} from 'firebase/app'
import {getAuth , createUserWithEmailAndPassword,signOut,signInWithEmailAndPassword , onAuthStateChanged} from 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD8pupgSKi3rvFiJnWbAUbqWywzoZCxpMQ",
    authDomain: "codingclub-b512b.firebaseapp.com",
    projectId: "codingclub-b512b",
    storageBucket: "codingclub-b512b.appspot.com",
    messagingSenderId: "963651075732",
    appId: "1:963651075732:web:b7a228cb49f80dcb8f3e81",
    measurementId: "G-2DL2L3RN4W"
  };
initializeApp(firebaseConfig);

const auth = getAuth();
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
const alertEmail = document.querySelector('.alertEmail');
const alertPassword = document.querySelector('.alertPassword');
const alertNewEmail = document.querySelector('.alertNewEmail');

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


//signing users up 
const signupForm = document.getElementById('new-users-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = signupForm.querySelector('#new-email').value; // Corrected ID
    const password = signupForm.querySelector('#new-password').value; // Corrected ID
    alertNewEmail.classList.add('hidden');

    createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => { 
        console.log("User created:", cred.user);
        signupForm.reset();
    })
    .catch((err) => {
        let errorMessage=err.code;
        console.log(errorMessage)
        if(errorMessage==='auth/invalid-email'){
            alertNewEmail.classList.remove('hidden');
            
        }
    });
});

const logoutButton = document.getElementById('logoutBtn');
logoutButton.addEventListener('click' , () => {
    signOut(auth)
    .then(() => {
        console.log('the user signed out')
        window.location.reload();
    })
    .catch((err) => {
        let errorMessage = err.code;
        console.log(errorMessage);

    })
 

})
const loginForm = document.querySelector('.login');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = loginForm.querySelector('#email').value;
    const password = loginForm.querySelector('#password').value;
    alertEmail.classList.add('hidden');
    alertPassword.classList.add('hidden');

    signInWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            console.log('the user logged in:', cred.user); // Log user details
            
        })
        .catch((err) => {
            let errorMessage=err.code; // Log any error messages
            console.log(errorMessage);
            if(errorMessage==='auth/invalid-email'){
                alertEmail.classList.remove('hidden');

            }
            else if(errorMessage==='auth/invalid-login-credentials'){
                alertPassword.classList.remove('hidden');
            }
            
        
          
        });
});

onAuthStateChanged(auth ,(user) => {
    console.log(user)
    if(user!=null){
        joinNowBtn.classList.add('hidden');
        logoutButton.classList.remove('hidden');
        loginModal.style.display = 'none';

        
        

    }
})

