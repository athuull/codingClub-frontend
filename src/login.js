'use strict';

import {initializeApp} from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
import {getAuth , createUserWithEmailAndPassword,signOut,signInWithEmailAndPassword , onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js'

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
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the authentication instance
const auth = getAuth(app);

// Function to handle login form submission
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email1');
const passwordInput = document.getElementById('password1');
const alertCred = document.getElementById('alertCred');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        // User logged in successfully, you can redirect or perform other actions here.
        console.log('User logged in:', userCredential.user);
        window.location.href = 'index.html';
    } catch (err) {
        let errorMessage=err.code; // Log any error messages
            console.log(errorMessage);
        if (errorMessage === 'auth/invalid-login-credentials' || errorMessage === 'auth/wrong-password' ||  errorMessage === 'auth/invalid-email') {
            // Handle invalid email or password
            alertCred.classList.remove('hidden');
        }
    }
});
