function init() {
    // Get references to DOM elements
const outputDiv = document.getElementById('output');
const clickButton = document.getElementById('clickMe');

// Function to generate output
function displayMessage() {
    const messages = [
        "Hello, welcome to JS Lab 7!",
        "You clicked the button!",
        "JavaScript is working perfectly.",
        "Have fun coding!"
    ];

    // Pick a random message
    const randomIndex = Math.floor(Math.random() * messages.length);
    outputDiv.innerText = messages[randomIndex];
}

// Attach event listener to button
clickButton.addEventListener('click', displayMessage);

}
//add your javascrip between these two lines of code
 







window.addEventListener('load', init);
