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

