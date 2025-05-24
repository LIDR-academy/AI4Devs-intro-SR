// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Handler for the button click
function handleReverse() {
    const input = document.getElementById('inputString').value;
    const reversed = reverseString(input);
    document.getElementById('result').textContent = `Reversed string: ${reversed}`;
}
