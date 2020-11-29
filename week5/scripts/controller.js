
function validateEmail(email) {
    let check1 = false;
    let check2 = false;
    for (i in email) {
        if (email[i] === "@") {
            check1 = true;
        }
        else if (email[i] === "." && check1) {
            check2 = true;
        }
    }
    if (check1 && check2 && email.length >= 5) {
        return true;
    }
    else return false;
}

function validatePass(pass) {
    let check1 = false;
    let check2 = false;
    let check3 = false;
    for (i in pass) {
        if (pass[i] >= "A" && pass[i] <= "Z") {
            check1 = true;
        }
        else if (pass[i] >= "0" && pass[i] <= "9") {
            check2 = true;
        }
        else if (pass[i] === "!" || pass[i] === "@" || pass[i] === "#" || pass[i] === "$" || pass[i] === "%" || pass[i] === "^" || pass[i] === "&") {
            check3 = true;
        }
    }
    if (check1 && check2 && check3 && pass.length >= 6) {
        return true;
    }
    else return false;
}

function valEmail() {
    if (document.getElementsByName("email")[0].value.length === 0) {
        document.getElementById("errors").innerHTML = "";
    }
    else if (!validateEmail(document.getElementsByName("email")[0].value)) {
        document.getElementById("errors").innerHTML = "error in email";
    }
    else {
        document.getElementById("errors").innerHTML = "";
    }
}

function valPass() {
    if (document.getElementsByName("password")[0].value.length === 0) {
        document.getElementById("errors").innerHTML = "";
    }
    else if (!validatePass(document.getElementsByName("password")[0].value)) {
        document.getElementById("errors").innerHTML = "error in pasword";
    }
    else {
        document.getElementById("errors").innerHTML = "";
    }
}

function cbreg(check, errorCode, errorMessage) {
    if (check) {
        window.location.href = "./posts.html";
    }
    else {
        document.getElementById("errors").innerHTML = errorMessage;
    }
}
function cblog(check, errorCode, errorMessage) {
    if (check) {
        window.location.href = "./posts.html";
    }
    else {
        document.getElementById("errors").innerHTML = errorMessage;
    }
}

if (document.getElementById("register-form")) {
    document.getElementById("register-form").addEventListener("submit", register);
}
if (document.getElementById("login-form")) {
    document.getElementById("login-form").addEventListener("submit", login);
}

function register(event) {
    event.preventDefault();
    let email = document.getElementsByName("email")[0].value;
    let pass = document.getElementsByName("password")[0].value;
    let username = document.getElementsByName("username")[0].value;

    if (!validateEmail(email) || !validatePass(pass)) {
        return false;
    }
    alert("Успешно попълнени емайл и парола!!!");

    window.auth.register(username, email, pass, cbreg);
}


function login(event) {
    event.preventDefault();
    let email = document.getElementsByName("email")[0].value;
    let pass = document.getElementsByName("password")[0].value;

    if (!validateEmail(email) || !validatePass(pass)) {
        return false;
    }
    alert("Успешно попълнени емайл и парола!!!");
    
    window.auth.login(email, pass, cblog);
}