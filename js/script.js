// Esercizio di oggi: Campo Minato

// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente per(100 - 16) volte di
// inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati,
// la partita termina, altrimenti si continua chiedendo
// all’utente un altro numero.
// La partita termina quando il giocatore inserisce
// un numero “vietato” o raggiunge il numero massimo
// possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà
// all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50

var output = document.getElementById('output');

// mi serviranno due array: uno per i 16 numeri generati
// dal computer (le "mine") e uno per i numeri che proverà
// di volta in volta a inserire l'utente cercando di evitare
// le mine (<= 84). Entrambi sono inizialmente vuoti.

var mines = [];
var userNumbers = [];

// ora per riempire l'array mines creo una funzione che generi
// dei numeri casuali e li pushi nell'array fintantochè
// l'array.length non risulti < 16. Utilizzo un while
// per ciclare fino a mines.length < 16 e un nested if per
// verificare che il numero non sia un duplicato.

function generateRandomNumbers(min, max) {
    
    while (mines.length < 16) {
        
        var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        
        if (!mines.includes(randomNumber)) {
            
            mines.push(randomNumber);
        }
    }
}

generateRandomNumbers(1, 100); //richiamo la funzione per verificare che tutto funzioni

console.log(mines); //log per verificare se l'array si è riempito correttamente

// ora per riempire l'array userNumbers creo una funzione
// che pushi nell'array i numeri inseriti in un prompt dall'utente
// a meno che questo non sia già stato inserito (prima verifica che faccio).
// Passata la prima verifica, prima di pushare verifico che
// il numero inserito non sia presente in mines (in quel caso
// restituisco game over), altrimenti pusho.
// Uso quindi while per ciclare finoa userNumbers.length < 84,
// un nested if per verificare che il numero inserito non sia
// dublicato, e un ulteriore nested if per verifcare che l'utente
// non abbia colpito una mina. Else pusho.

while (userNumbers.length < 5) {
    
    var userNumber = parseInt(prompt("Inserisci un numero da 1 a 100."));

    if (!Number.isNaN(userNumber) && userNumber <= 100) {
        
        if (!userNumbers.includes(userNumber)) {

            if (mines.includes(userNumber)) {

                output.innerHTML = "Hai preso una mina! GAME OVER";

                break;

            } else {

                userNumbers.push(userNumber);
            }
        }
        
    }
}

console.log(userNumbers); //log per verificare se l'array si è riempito correttamente