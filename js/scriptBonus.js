
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà
// all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50

var output = document.getElementById('output');


var mines = [];
var userNumbers = [];

var top = 0;

while (top === 0) {

    var difficulty = parseInt(prompt("Scegli un livello di difficoltà da 0 a 2."));

    if (!Number.isNaN(difficulty) && difficulty <= 2) {

        if (difficulty === 0) {

            top = 100;

        } else if (difficulty === 1) {

            top = 80;

        } else {

            top = 50;

        }

    }
}


function generateRandomNumbers(min, max) {

    while (mines.length < 16) {

        var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        if (!mines.includes(randomNumber)) {

            mines.push(randomNumber);
        }
    }
}

generateRandomNumbers(1, top); 

console.log(mines); 


while (userNumbers.length < (top - 16)) {

    var userNumber = parseInt(prompt("Inserisci un numero da 1 a " + top));

    if (!Number.isNaN(userNumber) && userNumber <= top) {

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

if (userNumbers.length === (top - 16)) {

    output.innerHTML += "</br>HAI VINTO!! Hai raggiunto il punteggio massimo complimenti!";

} else if (userNumbers.length > (top - Math.floor(0.7 * (top - 16)))) {

    output.innerHTML += "</br>Partita fantastica! Hai raggiunto l'ottimo punteggio di: " + userNumbers.length;

} else if (userNumbers.length > (top - Math.floor(0.35 * (top - 16)))) {

    output.innerHTML += "</br>Partita discreta, ma devi impegnarti di più! Hai totalizzato " + userNumbers.length + " punti.";

} else if (userNumbers.length <= (top - Math.floor(0.35 * (top - 16)))) {

    output.innerHTML += "</br>Fai davvero pena! Hai raggiunto a malapena il pietoso punteggio di " + userNumbers.length;

}

// output.innerHTML += "</br>Il punteggio è " + userNumbers.length;