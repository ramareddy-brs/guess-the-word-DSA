class Master {
  constructor(secret) {
      this.secret = secret;
  }

  guess(word) {
      if (!this.isValidWord(word)) {
          return -1;
      }

      let count = 0;
      for (let i = 0; i < 6; i++) {
          if (word[i] === this.secret[i]) {
              count++;
          }
      }

      return count;
  }

  isValidWord(word) {
      return true;
  }
}

function findSecretWord(secret, words, allowedGuesses) {
  const master = new Master(secret);

  while (allowedGuesses > 0) {
      const guessWord = words[Math.floor(Math.random() * words.length)];
      const exactMatches = master.guess(guessWord);

      if (exactMatches === 6) {
          console.log("You guessed the secret word correctly.");
          return;
      }

      allowedGuesses--;
  }

  console.log("Either you took too many guesses, or you did not find the secret word.");
}


const secret = "acckzz";
const words = ["acckzz", "ccbazz", "eiowzz", "abcczz"];
const allowedGuesses = 10;

findSecretWord(secret, words, allowedGuesses);