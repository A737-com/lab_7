window.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('entryinput');
    const alertButton = document.getElementById('entrybutton');
    const outputText = document.getElementById('textoutput');
    const yourName = "Archit Singh"; // replace with your name

    function showMessage() {
        const userInput = inputField.value.trim();
        if (!userInput) return;

        alert(`${yourName}: ${userInput}`);
        outputText.textContent = userInput;
    }

    alertButton.addEventListener('click', showMessage);
    inputField.addEventListener('keydown', function(e) {
        if (e.key === "Enter" || e.keyCode === 13) {
            e.preventDefault();
            showMessage();
        }
    });
});
