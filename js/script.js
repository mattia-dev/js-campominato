var output = document.getElementById('output');

var mines = [];
var userNumbers = [];

var topValue = 0;

while (topValue === 0) {

    var difficulty = parseInt(prompt("Scegli un livello di difficoltà da 0 a 2."));

    if (!Number.isNaN(difficulty) && difficulty <= 2) {

        if (difficulty === 0) {

            topValue = 100;

        } else if (difficulty === 1) {

            topValue = 80;

        } else {

            topValue = 50;

        }
    }
}

console.log(topValue);

function generateRandomNumbers(min, max) {

    while (mines.length < 16) {

        var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        if (!mines.includes(randomNumber)) {

            mines.push(randomNumber);
        }
    }
}

generateRandomNumbers(1, topValue);

console.log(mines);

while (userNumbers.length < (topValue - 16)) {

    var userNumber = parseInt(prompt("Inserisci un numero da 1 a " + topValue));

    if (!Number.isNaN(userNumber) && userNumber <= topValue) {

        if (!userNumbers.includes(userNumber)) {

            if (mines.includes(userNumber)) {

                output.innerHTML += "Hai preso una mina! GAME OVER";

                break;

            } else {

                userNumbers.push(userNumber);
            }
        }
    }
}

console.log(userNumbers);

if (userNumbers.length === (topValue - 16)) {

    output.innerHTML += "</br>HAI VINTO!! Hai raggiunto il punteggio massimo complimenti!";

} else if (userNumbers.length > Math.floor(0.7 * (topValue - 16))) {

    output.innerHTML += "</br>Partita fantastica! Hai raggiunto l'ottimo punteggio di: " + userNumbers.length;

} else if (userNumbers.length > Math.floor(0.3 * (topValue - 16))) {

    output.innerHTML += "</br>Partita discreta, ma devi impegnarti di più! Hai totalizzato " + userNumbers.length + " punti.";

} else if (userNumbers.length > 0) {

    output.innerHTML += "</br>Fai davvero pena! Hai raggiunto a malapena il pietoso punteggio di " + userNumbers.length;

} else {

    output.innerHTML += "</br>Okay dai, questa è sfortuna! Hai fatto 0 punti, riprova!";
}