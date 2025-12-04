/*
 JSnack 1
 L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
*/

const primoNumero= 17;
const secondoNumero = 20;
const terzoNumero = 33;

if (primoNumero > secondoNumero) {
    console.log(primoNumero)
} else {
    console.log(secondoNumero)
}

// opzione con 3 numeri e variabile

let maggiore = primoNumero; 
if (secondoNumero > maggiore) {
    maggiore = secondoNumero;
}

if (terzoNumero > maggiore) {
    maggiore = terzoNumero;
}

// col promt

let numberOne = prompt("scrivi due numeri");

//per farmelo tornare un numero o potevo assegnare parseInt prima di promt
let numeroUno = parseInt(numberOne);

let numbertwo = prompt("scrivi il secondo numero");
let numeroDue = parseInt(numbertwo);

// se il numero uno è maggiore stampo il primo altrimenti stampo il secondo

if (numeroUno > numeroDue) {
    console.log(numeroUno)
}
else {
    console.log(numeroDue)
}

// scritto uguale al primo ma col prompt e parseint

