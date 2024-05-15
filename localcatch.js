function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    // Simple validation
    if (!username || !password) {
        alert("Please fill in all fields");
        return;
    }

    // Check if user exists in local storage
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (username === savedUsername && password === savedPassword) {
        // Hide login form and display welcome message
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("loggedInUser").style.display = "block";
        document.getElementById("usernameDisplay").innerText = username;
    } else {
        alert("Invalid username or password");
    }
}

function signup() {
    const username = document.getElementById("signupUsername").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    // Simple validation
    if (!username || !email || !password) {
        alert("Please fill in all fields");
        return;
    }

    // Store user data in local storage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    // Hide signup form and display welcome message
    document.getElementById("signupPage").style.display = "none";
    document.getElementById("loggedInUser").style.display = "block";
    document.getElementById("usernameDisplay").innerText = username;
}

function logout() {
    // Clear local storage
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("password");

    // Show login form and hide welcome message
    document.getElementById("loginPage").style.display = "block";
    document.getElementById("loggedInUser").style.display = "none";
}

function showSignup() {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("signupPage").style.display = "block";
}

function showLogin() {
    document.getElementById("signupPage").style.display = "none";
    document.getElementById("loginPage").style.display = "block";
}

// Check if user is already logged in
window.onload = function() {
    const username = localStorage.getItem("username");
    if (username) {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("signupPage").style.display = "none";
        document.getElementById("loggedInUser").style.display = "block";
        document.getElementById("usernameDisplay").innerText = username;
    }
}
