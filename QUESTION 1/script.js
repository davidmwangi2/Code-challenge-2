function swapCase(inputString) {
    let swappedString = '';
    for (let i = 0; i < inputString.length; i++) {
        let currentChar = inputString[i];
        if (currentChar === currentChar.toUpperCase()) {
            swappedString += currentChar.toLowerCase();
        } else {
            swappedString += currentChar.toUpperCase();
        }
    }
    return swappedString;
}

function swapCaseAndDisplay() {
    const inputText = document.getElementById('textInput').value;
    const swappedText = swapCase(inputText);
    document.getElementById('output').textContent = swappedText;
}