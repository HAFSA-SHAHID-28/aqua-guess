var secretNumber, maxNumber, attempts, maxAttempts;

function startGame(level) {
    if (level === "easy") {
        maxNumber = 10;
        maxAttempts = 5;
    } else if (level === "medium") {
        maxNumber = 50;
        maxAttempts = 7;
    } else{
        maxNumber = 100;
        maxAttempts = 10;
    }

    secretNumber = Math.floor(Math.random() * maxNumber) + 1;
    attempts = 0;

    document.getElementById("levelSelect").style.display = "none";
    document.getElementById("gameSection").style.display = "block";
    document.getElementById("rangeInfo").innerHTML = `Guess a number between 1 and ${maxNumber}`;
    document.getElementById("userGuess").value = "";
    document.getElementById("userGuess").disabled = false;
    document.getElementById("message").innerHTML = "";
    document.getElementById("attempts").innerHTML = "Attempts: 0";

    var guessBtn = document.querySelector(".action-btn");
    guessBtn.disabled = false;

    var inputBox = document.getElementById("userGuess");
    inputBox.onkeypress = function name(event) {
        if (event.key === "Enter") {
            checkGuess();
        }
    };
}

function checkGuess() {
    var guess = Number(document.getElementById("userGuess").value);
    attempts++;

    if (!guess || guess < 1 || guess > maxNumber) {
        document.getElementById("message").innerHTML = `Please enter a number between 1 and ${maxNumber}`;
        document.getElementById("message").className = "error";
        attempts--;
        return;
    }

    if (guess < secretNumber) {
        document.getElementById("message").innerHTML = `Too low! Try again.`;
        document.getElementById("message").className = "error";
    } else if (guess > secretNumber) {
        document.getElementById("message").innerHTML = `Too high! Try again.`;
        document.getElementById("message").className = "error";
    } else{
        document.getElementById("message").innerHTML = `Congratulations! You guessed the number in ${attempts} attempts!`;
        document.getElementById("message").className = "success";
        endGame();
    }

    document.getElementById("attempts").innerHTML = `Attempts: ${attempts}`;
    document.getElementById("userGuess").value = "";

    if (attempts >= maxAttempts && guess !== secretNumber) {
        document.getElementById("message").innerHTML = `Game Over! The number was ${secretNumber}`;
        document.getElementById("message").className = "error";
        endGame();
    }
}

function endGame() {
    document.getElementById("userGuess").disabled = true;
    var guessBtn = document.querySelector(".action-btn");
    guessBtn.disabled = true;
}

function resetGame() {
    document.getElementById("levelSelect").style.display = "block";
    document.getElementById("gameSection").style.display = "none";
    document.getElementById("userGuess").value = "";
    document.getElementById("message").innerHTML = "";
    document.getElementById("attempts").innerHTML = "";
}


