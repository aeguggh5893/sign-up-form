"use strict"

document.addEventListener('DOMContentLoaded', function() {

    // let password = document.querySelector('#password').value;
    // let confirmPassword = document.querySelector('#confirm-password').value;
    let message = document.querySelector('#error');
    let form = document.querySelector('form');


    // if (confirmPassword === "" && password === "") {
    //     message.innerText = '* Passwords do not match';

    // } else if (confirmPassword === password) {
    //     message.innerText = ''; 
    // };

    form.addEventListener('submit', matchPassword);

    function matchPassword() {
        let password1 = document.querySelector('#password').value;
        let password2 = document.querySelector('#confirm-password').value;

        if (password1 === "") {
            message.innerText = '* Enter a password';
        } else if (password2 === '') {
            message.innerText = '* Enter confirm password';
        } else if (password1 !== password2) {
            message.innerText = '* Passwords do not match';
            return false;
        } else {
            return true;
        };
    };
});