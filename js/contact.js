//contact JS script STARTED
"use strict";
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Reset error messages
    document.getElementById('name-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('message-error').textContent = '';

    // Validate name
    if (name.trim() === '') {
        document.getElementById('name-error').textContent = 'Please enter your full name';
        return;
    }

    // Validate email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email address';
        return;
    }

    // Validate message
    if (message.trim() === '') {
        document.getElementById('message-error').textContent = 'Please enter your message';
        return;
    }

    // If all validations pass it will clear fields and show alert message
    alert('Form submitted successfully!');
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    document.getElementById('name-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('message-error').textContent = '';
}