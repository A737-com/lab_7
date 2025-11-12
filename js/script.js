// JS Lab 7 - Event Handling and DOM Manipulation
// Name updated to Archit Singh

window.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('entryinput');
    const alertButton = document.getElementById('entrybutton');
    const outputText = document.getElementById('textoutput');

    const yourName = "Archit Singh"; // <-- your updated name

    function showMessage() {
        const userInput = inputField.value.trim();
        if (!userInput) return;

        // Show alert with name
        alert(`${yourName}: ${userInput}`);

        // Update h2 text
        outputText.textContent = userInput;

        // Optional: clear input after alert
        inputField.value = "";
    }

    // Click event
    alertButton.addEventListener('click', showMessage);

    // Enter key event
    inputField.addEventListener('keydown', function(e) {
        if (e.key === "Enter" || e.keyCode === 13) {
            e.preventDefault(); // prevent form submission
            showMessage();
        }
    });
});
