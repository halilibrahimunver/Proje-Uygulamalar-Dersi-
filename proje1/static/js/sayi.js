// Oyun başlangıcında rastgele bir sayı oluşturulur
var randomNumber = generateRandomNumber();
console.log("Tutulan sayı: " + randomNumber);

document.getElementById('submitBtn').addEventListener('click', function() {
  var guess = document.getElementById('guessInput').value;
  if (isValidGuess(guess)) {
    checkGuess(guess, randomNumber);
  } else {
    document.getElementById('result').innerHTML = "Lütfen 4 farklı basamaklı bir sayı girin!";
  }
});

document.getElementById('newNumberBtn').addEventListener('click', function() {
  randomNumber = generateRandomNumber();
  console.log("Yeni sayı: " + randomNumber);
  document.getElementById('result').innerHTML = "";
});

function isValidGuess(guess) {
  return /^\d{4}$/.test(guess) && new Set(guess.split('')).size === 4;
}

function generateRandomNumber() {
  var numbers = [0,1,2,3,4,5,6,7,8,9];
  var randomNumber = "";
  for (var i = 0; i < 4; i++) {
    var randomIndex = Math.floor(Math.random() * numbers.length);
    randomNumber += numbers[randomIndex];
    numbers.splice(randomIndex, 1);
  }
  return randomNumber;
}

function checkGuess(guess, randomNumber) {
  var bulls = 0;
  var cows = 0;
  var result = "";

  for (var i = 0; i < guess.length; i++) {
    if (guess[i] === randomNumber[i]) {
      bulls++;
      result += "<span style='text-decoration: underline;'>" + guess[i] + "</span>";
    } else if (randomNumber.includes(guess[i])) {
      cows++;
      result += guess[i];
    } else {
      result += guess[i];
    }
  }

  if (bulls === 4) {
    document.getElementById('result').innerHTML = "Tebrikler, sayıyı doğru tahmin ettiniz!";
  } else {
    document.getElementById('result').innerHTML = "Bulls: " + bulls + ", Cows: " + cows + "<br>" + result;
  }
}