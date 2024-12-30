// Get elements
const loginBtn = document.getElementById("login-btn");
const popupOverlay = document.getElementById("popup-overlay");
const closeBtn = document.getElementById("close-btn");
const submitBtn = document.getElementById("submit-btn");

// Show the popup when login is clicked
loginBtn.addEventListener("click", () => {
    popupOverlay.style.display = "flex";
});

// Hide the popup when close button is clicked
closeBtn.addEventListener("click", () => {
    popupOverlay.style.display = "none";
});

// Handle form submission
submitBtn.addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        alert(`Welcome, ${username}!`);
        popupOverlay.style.display = "none";
    } else {
        alert("Please enter both username and password.");
    }
});
