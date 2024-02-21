let signinBtn = document.getElementById("signinBtn");
let signupBtn = document.getElementById("signupBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

function checkEmptyFields() {
    let inputFields = document.querySelectorAll('.input-field input');
    for (let i = 0; i < inputFields.length; i++) {
        if (inputFields[i].value === '') {
            return true; 
        }
    }
    return false; 
}

signupBtn.onclick = function () {
    let nameInput = document.getElementById("nameInput").value;
    let emailInput = document.getElementById("emailInput").value;
    let passwordInput = document.getElementById("passwordInput").value;
    let weightInput = document.getElementById("weightInput").value;
    let heightInput = document.getElementById("heightInput").value;

    if (!checkEmptyFields()) {
        if (!validateEmail(emailInput)) {
            alert('Please enter a valid email address.');
            return; 
        }

        if (!validatePassword(passwordInput)) {
            alert('Please enter a valid password (minimum 8 characters).');
            return; 
        }

        sessionStorage.setItem("name", nameInput);
        sessionStorage.setItem("email", emailInput);
        sessionStorage.setItem("password", passwordInput);
        sessionStorage.setItem("weight", weightInput); 
        sessionStorage.setItem("height", heightInput); 

        window.location.href = "home.html";
    } else {
        alert("Please fill in all the fields");
    }
};

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validatePassword(password) {
    return password.length >= 8; 
}
