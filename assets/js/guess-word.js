const Master = {
    secretWord: "acckzz",
    allowedGuesses: 10,
    remainingGuesses: 10, // Initialize with allowedGuesses
    guess: function(word) {
      if (this.remainingGuesses <= 0) {
        return "Either you took too many guesses, or you did not find the secret word.";
      }

      // Assuming there's a function to check the exact matches
      const exactMatches = this.checkExactMatches(word);

      this.remainingGuesses--;

      if (exactMatches === 6) {
        return "You guessed the secret word correctly.";
      } else {
        return `Guess: ${word}, Exact Matches: ${exactMatches}, Remaining Guesses: ${this.remainingGuesses}`;
      }
    },
    checkExactMatches: function(word) {
      // Simplified logic for checking exact matches
      let count = 0;
      for (let i = 0; i < this.secretWord.length; i++) {
        if (this.secretWord[i] === word[i]) {
          count++;
        }
      }
      return count;
    }
  };

  // Function to start the guessing game
  function startGuessGame() {
    const words = ["acckzz", "ccbazz", "eiowzz", "abcczz"];
    const outputElement = document.getElementById("output");
    let result = "";

    for (const word of words) {
      const guessResult = Master.guess(word);
      result += guessResult + "<br>";

      if (guessResult.includes("You guessed the secret word correctly.")) {
        break; // Exit the loop if the secret word is guessed correctly
      }
    }

    // Display the final result
    const resultElement = document.createElement("div");
    resultElement.id = "result";
    resultElement.innerHTML = result;
    outputElement.appendChild(resultElement);
  }

  // Start the game on page load
  window.onload = startGuessGame;