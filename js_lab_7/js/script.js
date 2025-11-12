function init() {
    // Existing starter code (do not remove)
    const outputDiv = document.getElementById('output');
    const clickButton = document.getElementById('clickMe');

    function displayMessage() {
        const messages = [
            "Hello, welcome to JS Lab 7!",
            "You clicked the button!",
            "JavaScript is working perfectly.",
            "Have fun coding!"
        ];

        const randomIndex = Math.floor(Math.random() * messages.length);
        outputDiv.innerText = messages[randomIndex];
    }

    clickButton.addEventListener('click', displayMessage);

    // --------------------------
    // add your javascript between these two lines of code
    // --------------------------

    // ✅ Lab 7 code starts here
    const inputField = document.getElementById('entryinput'); // input box
    const alertButton = document.getElementById('entrybutton'); // div acting as button
    const outputText = document.getElementById('textoutput'); // h2 below button

    alertButton.addEventListener('click', function() {
        const yourName = "Vincint Silver"; // replace with your name
        const userInput = inputField.value;

        // 1️⃣ Show alert with name
        alert(`${yourName}: ${userInput}`);

        // 2️⃣ Change h2 text to input
        outputText.textContent = userInput;
    });
    // ✅ Lab 7 code ends here
}

// Do not touch this
window.addEventListener('load', init);
