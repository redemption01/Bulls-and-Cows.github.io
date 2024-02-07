const secretNumber = generateSecretNumber();

function generateSecretNumber() {
    let number = '';
    while (number.length < 4) {
        const digit = Math.floor(Math.random() * 10);
        if (!number.includes(digit.toString())) {
            number += digit;
        }
    }
    return number;
}

function submitGuess() {
    const guessInput = document.getElementById('guessInput');
    const guess = guessInput.value;

    if (!isValidGuess(guess)) {
        alert('Моля, въведете валидно 4-цифрено число с уникални цифри.');
        return;
    }

    const feedback = getFeedback(guess);
    displayFeedback(feedback);

    if (feedback === 'Браво! Познахте числото!') {
        alert('Поздравления! Познахте числото! Нова игра започва.');
        window.location.reload();
    }
}

function isValidGuess(guess) {
    return /^\d{4}$/.test(guess) && new Set(guess).size === 4;
}

function getFeedback(guess) {
    if (guess === secretNumber) {
        return 'Браво! Познахте числото!';
    }

    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < 4; i++) {
        if (guess[i] === secretNumber[i]) {
            bulls++;
        } else if (secretNumber.includes(guess[i])) {
            cows++;
        }
    }

    return `Бикове: ${bulls}, Крави: ${cows}`;
}

function displayFeedback(feedback) {
    const feedbackElement = document.getElementById('feedback');
    feedbackElement.textContent = feedback;
}

function openPopup() {
    document.getElementById('rules-popup').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    var startMenu = document.getElementById("start-menu");
    startMenu.style.display = "flex"; 
});

var audio = document.getElementById("bgMusic");
var audioIcon = document.getElementById("audioIcon");

function toggleAudio() {
    if (audio.paused) {
        audio.play();
        audioIcon.classList.remove("fa-solid fa-volume-xmark-mute");
        audioIcon.classList.add("fa-solid fa-volume-xmark-up");
    } else {
        audio.pause();
        audioIcon.classList.remove("fa-solid fa-volume-xmark-up");
        audioIcon.classList.add("fa-solid fa-volume-xmark-mute");
    }
}

function playAudio() {
    audio.play();
}

function pauseAudio() {
    audio.pause();
}

function showWinPopup() {
    var winPopup = document.getElementById("win-popup");
    winPopup.style.display = "flex"; 

    document.body.style.backgroundColor = "#FFD700"; 
    setTimeout(function() {
        document.body.style.backgroundColor = ""; 
    }, 3000); 
}

function closeWinPopup() {
    var winPopup = document.getElementById("win-popup");
    winPopup.style.display = "none";
}

// Функции за начално меню и правила
function startGame() {
    var startMenu = document.getElementById("start-menu");
    startMenu.style.display = "none";
}

function startGame1() {
    var playerName = document.getElementById("playerName").value;
    
    if (!playerName) {
        alert("Моля, въведете вашето име преди да стартирате играта.");
        return;
    }

    // Пренасочване към играта (променете "game.html" с името на вашия файл)
    window.location.href = "index.html";
}

function openLeaderboard() {
    var leaderboard = document.getElementById("leaderboard");
    leaderboard.style.display = "block";
    // Тук можете да добавите код за зареждане на класацията, например, от сървъра.
}

function closeLeaderboard() {
    var leaderboard = document.getElementById("leaderboard");
    leaderboard.style.display = "none";
}

function showRules() {
    var rulesPopup = document.getElementById("rules-popup");
    rulesPopup.style.display = "flex"; 

    var startMenu = document.getElementById("start-menu");
    startMenu.style.display = "none"; 
}

function closePopup() {
    var popups = document.getElementsByClassName("popup");
    for (var i = 0; i < popups.length; i++) {
        popups[i].style.display = "none";
    }

    var startMenu = document.getElementById("start-menu");
    startMenu.style.display = "flex";
}