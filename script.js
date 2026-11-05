// Display the current year automatically

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


// Welcome message in the browser console

console.log("Welcome to Mkhize Tech Solutions!");


// Display a message when the website loads

document.addEventListener("DOMContentLoaded", function () {
    console.log("Website loaded successfully!");
});