function init() {
    // Get references to DOM elements
    const inputField = document.getElementById('entryinput');
    const alertButton = document.getElementById('entrybutton');
    const outputText = document.getElementById('textoutput');

    // Function to show alert and update h2
    function showMessage() {
        const yourName = "Archit Singh"; // Replace with your name
        const userInput = inputField.value;

        if (!userInput.trim()) return; // Ignore empty input

        // Show alert
        alert(`${yourName}: ${userInput}`);

        // Update h2 below the button
        outputText.textContent = userInput;
    }

    // Click event for the div
    alertButton.addEventListener('click', showMessage);

    // Trigger same action when Enter key is pressed in input
    inputField.addEventListener('keydown', function(e) {
        if (e.key === "Enter") {
            showMessage();
        }
    });
}

// Run init when window loads
window.addEventListener('load', init);
