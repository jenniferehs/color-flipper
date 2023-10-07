// Define the hex characters as a string as more concise than an array
const hexChars = "0123456789ABCDEF";

// Select elements using querySelector
const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

// Add a click event listener
btn.addEventListener('click', () => {
    let hexColor = '#';
    
    // Generate a 6-character random hex color
    for (let i = 0; i < 6; i++) {
        hexColor += getRandomHexChar();
    }
    
    // Update the text content and background color
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

// Function to get a random hex character
function getRandomHexChar() {
    return hexChars[Math.floor(Math.random() * hexChars.length)];
}