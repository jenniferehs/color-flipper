// Define an array of colors
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// Select the button and color element using DOM manipulation
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

// Add a click event listener to the button
btn.addEventListener('click', () => {
    // Generate a random number between 0 and 3
    const randomNumber = getRandomNumber();

    // Update the background color of the body and the displayed color text
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

// Define an arrow function to generate a random number within the colors array length
const getRandomNumber = () => Math.floor(Math.random() * colors.length);
