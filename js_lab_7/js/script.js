window.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('entryinput');
    const alertButton = document.getElementById('entrybutton');
    const outputText = document.getElementById('textoutput');
    const yourName = "Vincint Silver"; // replace with your actual name

    function showMessage() {
        const userInput = inputField.value.trim();
        if (!userInput) {
            return; // if empty, do nothing
        }
        alert(`${yourName}: ${userInput}`);
        outputText.textContent = userInput;
    }

    alertButton.addEventListener('click', showMessage);

    inputField.addEventListener('keydown', function(e) {
        if (e.key === "Enter" || e.keyCode === 13) {
            e.preventDefault(); // Prevent form submission
            showMessage();
        }
    });
});
