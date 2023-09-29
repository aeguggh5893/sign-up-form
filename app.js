"use strict"

document.addEventListener('DOMContentLoaded', function() {

    let password = document.querySelector('#password').value;
    let confirmPassword = document.querySelector('#confirm-password').value;
    let message = document.querySelector('#error');


    if (confirmPassword === "" && password === "") {
        message.innerText = '* Passwords do not match';

    } else if (confirmPassword === password) {
        message.innerText = ''; 
    };
});