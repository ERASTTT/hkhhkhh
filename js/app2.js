// 3 задание на странице 140 
var pickWord = function () {
  var words = [
    "история",
    "мышь",
    "прекрасный",
    "принцесса",
    "дикобраз",
    "таксист"
  ];

  return words[Math.floor(Math.random() * words.length)];
};

var setupAnswerArray = function (word) {
  var answerArray = [];
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
    }

    return answerArray;
  };

  var showPlayerProgress = function (answerArray) {
    alert(answerArray.join(" "));
  };

  var getGuess = function () {
    return prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");
  };

  var updateGameState = function (guess, word, answerArray) {
    var appearances = 0;
    for (var j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess;
        appearances++;
      }
    }

    return appearances;
  };

  var showAnswerAndCongratulatePlayer = function (answerArray) {
    showPlayerProgress(answerArray);
    alert("Отлично! Было загадано слово " + answerArray.join(""));
  };
  var word = pickWord();
  var answerArray = setupAnswerArray(word);
  var remainingLetters = word.length;

  while (remainingLetters > 0) {
    showPlayerProgress(answerArray);
    var guess = getGuess();
    if (guess === null) {
      break;
    } else if (guess.length !== 1) {
      alert("Пожалуйста, введите одиночную букву.");
    } else {
      var correctGuesses = updateGameState(guess, word, answerArray);
      remainingLetters -= correctGuesses;
    }
  }

  showAnswerAndCongratulatePlayer(answerArray);