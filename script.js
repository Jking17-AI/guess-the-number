function guessNumber() {
            let guessNumber = Math.floor(Math.random() * 10) + 1;
            let textInput = document.getElementById('textInput').value;
            let resultElement = document.getElementById('result'); // Get the result element

            if (parseInt(textInput) === guessNumber) { // Convert textInput to number
                resultElement.textContent = "Good job! You guessed " + guessNumber; // Display on page
            } else if(parseInt(textInput) < guessNumber) {
                resultElement.textContent = "Try again! low"; // Display on page
            }
             else  {
                resultElement.textContent = "Try again! high"; // Display on page
            }
        }
