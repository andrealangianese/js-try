/*
 JSnack 1
 L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
*/

// const primoNumero= 17;
// const secondoNumero = 20;
// const terzoNumero = 33;

// if (primoNumero > secondoNumero) {
//     console.log(primoNumero)
// } else {
//     console.log(secondoNumero)
// }

// // opzione con 3 numeri e variabile

// let maggiore = primoNumero; 
// if (secondoNumero > maggiore) {
//     maggiore = secondoNumero;
// }

// if (terzoNumero > maggiore) {
//     maggiore = terzoNumero;
// }

// // col promt

// let numberOne = prompt("scrivi due numeri");

// //per farmelo tornare un numero o potevo assegnare parseInt prima di promt
// let numeroUno = parseInt(numberOne);

// let numbertwo = prompt("scrivi il secondo numero");
// let numeroDue = parseInt(numbertwo);

// // se il numero uno è maggiore stampo il primo altrimenti stampo il secondo

// if (numeroUno > numeroDue) {
//     console.log(numeroUno)
// }
// else {
//     console.log(numeroDue)
// }

// scritto uguale al primo ma col prompt e parseint


// // JSnack 3
// //  Il software deve chiedere per 5 volte all’utente di inserire un numero. 
// //  Il programma stampa la somma di tutti i numeri inseriti. 
// //  Esegui questo programma in due versioni, con il for e con il while (facoltativo)

// let dammiNumero1 = parseInt(prompt("scrivimi un numero"));
// let dammiNumero2 = parseInt(prompt("scrivimi un numero"));
// let dammiNumero3 = parseInt(prompt("scrivimi un numero"));
// let dammiNumero4 = parseInt(prompt("scrivimi un numero"));
// let dammiNumero5 = parseInt(prompt("scrivimi un numero"));

// console.log(dammiNumero1+dammiNumero2+dammiNumero3+dammiNumero4+dammiNumero5);

// fatto a mano adesso devo provare a creare un ciclo

// let somma = 0;

// for (let i = 0; i < 5; i++) {
//     const numero = parseInt(prompt("Scrivi un numero"));
//     somma += numero;
// }

// console.log("La somma è:", somma);

// JSnack 2
// L’utente inserisce due parole in successione, con due prompt. 
// Il software stampa prima la parola più corta, poi la parola più lunga;

// const parolaUno = prompt("inserisci una parola");
// const parolaDue = prompt("inserisci un'altra parola");

// if (parolaUno.length > parolaDue.length) {
//     console.log(parolaUno, parolaDue);
// } else if (parolaDue.length > parolaUno.length) {
//     console.log(parolaDue, parolaUno);
// } else {
//     console.log("le parole hanno la stessa lunghezza", parolaUno, parolaDue);
// }


// JSnack 5
// Crea un array vuoto. 
// Chiedi per 6 volte all’utente di inserire un numero, 
// se è dispari inseriscilo nell’array

let numberDispari = [];

for (let i = 0; i < 6; i++) {
    let numero = parseInt(prompt("scrivi un numero"));
    
    if (numero % 2 !== 0) {
        numberDispari.push(numero);
    }
    
}
console.log(numberDispari);

// JSnack 5
// Crea un array vuoto. 
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

// let numeriDispari = [];

// for (let i = 0; i < 6; i++) {
//     let numero = parseInt(prompt("Scrivi un numero"));

//     if (numero % 2 !== 0) {   // controllo dispari
//         numeriDispari.push(numero);   // inserisco nell’array
//     }
// }

// console.log("Numeri dispari inseriti:", numeriDispari);




