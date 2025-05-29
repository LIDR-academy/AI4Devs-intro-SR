// String reversal function using multiple approaches for best practices
function reverseString(str) {
  // Input validation
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }

  // Method 1: Using built-in array methods (most common and readable)
  return str.split("").reverse().join("");

  // Alternative methods (commented out but available):

  // Method 2: Using a for loop (traditional approach)
  // let reversed = '';
  // for (let i = str.length - 1; i >= 0; i--) {
  //     reversed += str[i];
  // }
  // return reversed;

  // Method 3: Using recursion
  // if (str === '') return '';
  // return reverseString(str.substr(1)) + str.charAt(0);

  // Method 4: Using reduce
  // return str.split('').reduce((reversed, char) => char + reversed, '');
}

// DOM manipulation and event handling
function initializeApp() {
  const inputElement = document.getElementById("inputString");
  const reverseButton = document.getElementById("reverseBtn");
  const resultElement = document.getElementById("result");

  // Main reverse function
  function performReverse() {
    try {
      const inputValue = inputElement.value.trim();

      if (inputValue === "") {
        resultElement.textContent = "Please enter a string to reverse.";
        resultElement.style.color = "#e74c3c";
        return;
      }

      const reversedString = reverseString(inputValue);
      resultElement.textContent = reversedString;
      resultElement.style.color = "#27ae60";
    } catch (error) {
      resultElement.textContent = `Error: ${error.message}`;
      resultElement.style.color = "#e74c3c";
    }
  }

  // Event listeners
  reverseButton.addEventListener("click", performReverse);

  // Allow Enter key to trigger reverse
  inputElement.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      performReverse();
    }
  });

  // Clear result when input changes
  inputElement.addEventListener("input", function () {
    if (this.value.trim() === "") {
      resultElement.textContent = "Your reversed string will appear here...";
      resultElement.style.color = "#333";
    }
  });

  // Focus on input when page loads
  inputElement.focus();
}

// Initialize the application when DOM is fully loaded
document.addEventListener("DOMContentLoaded", initializeApp);

// Expose reverseString function globally for testing purposes
window.reverseString = reverseString;
