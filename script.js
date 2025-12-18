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

// let numberDispari = [];

// for (let i = 0; i < 6; i++) {
//     let numero = parseInt(prompt("scrivi un numero"));

//     if (numero % 2 !== 0) {
//         numberDispari.push(numero);
//     }

// }
// console.log(numberDispari);


//funzioni 


// Chiedi all’utente di inserire una parola.
// Crea una funzione che conti quante vocali contiene.
// Usa un array con la lista delle vocali: ["a", "e", "i", "o", "u"].

// Risultato:
// Mostra quante vocali ci sono nella parola.

//chiedere all'utente di inserire una parola

// let parolaUtente = prompt("inserisci una parola");
// const cercaVocali = ["a", "e", "i", "o", "u"];
// const vocaliTrovate = [];

// function contaVocali() {
//     //creo un ciclo per analizzare tutte le singole lettere
//     for (let i = 0; i < parolaUtente.length; i++) {
//         // riduco tutte le parole in caratteri piccoli
//         let lettera = parolaUtente[i].toLowerCase();

//         //ciclo su vocali disponibili

//         for (let x = 0; x < cercaVocali.length; x++) {

//             //se trovo una vocale la pusho dentro a vocaliTrovate
//             if (lettera === cercaVocali[x]) {
//                 vocaliTrovate.push(lettera);
//             }
//         }

//     }
// }
// contaVocali(); 

// console.log(parolaUtente)
// console.log(vocaliTrovate , "queste sono le vocali all'interno dalla tua parola");
// console.log(vocaliTrovate.length , "questo è il numero di vocali presenti nella tua parola")

/* 
 * Crea 10 oggetti che rappresentano una zucchina, 
 * indicandone per ognuno varietà, peso e lunghezza. 
 * Calcola quanto pesano tutte le zucchine.
 */


// const zucchina = [

//     {
//         'varietà' : 'Zucchina Nera di Milano',
//         'peso' : 34 ,
//         'lunghezza' : ''
//     },
//      {
//         'varietà' : 'romanesco',
//         'peso' : '290',
//         'lunghezza' : ''
//     },
//      {
//         'varietà' : 'fiorentina',
//         'peso' : '134',
//         'lunghezza' : ''
//     },
//      {
//         'varietà' : 'striata di napoli',
//         'peso' : '45',
//         'lunghezza' : ''
//     },
//      {
//         'varietà' : 'trombetta',
//         'peso' : '57',
//         'lunghezza' : ''
//     },
//      {
//         'varietà' : 'zucchina gialla',
//         'peso' : '69',
//         'lunghezza' : ''
//     },
//      {
//         'varietà' : 'bianca di sicilia',
//         'peso' : '90',
//         'lunghezza' : ''
//     },
//      {
//         'varietà' : 'ortolana',
//         'peso' : '139',
//         'lunghezza' : ''
//     },
//      {
//         'varietà' : 'patisson',
//         'peso' : '98',
//         'lunghezza' : ''
//     },
//      {
//         'varietà' : 'tonda di nizza',
//         'peso' : '75',
//         'lunghezza' : ''
//     }

// ]

// // isolo il peso in una variabile e poi lo sommo

// const isolo = zucchina[0].peso;

// console.log(isolo);


// //esempio di ciclo con for of

// let totalPeso = 0;

// for (const item of zucchina) {
//     totalPeso = totalPeso + Number(item.peso);
// }

// console.log(totalPeso);


//Crea un array composto da 10 automobili. Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano). 
// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
// Infine stampa separatamente i 3 array.

const automobili = [
    { marca: "Fiat", modello: "Panda", alimentazione: "benzina" },
    { marca: "Volkswagen", modello: "Golf", alimentazione: "diesel" },
    { marca: "Tesla", modello: "Model 3", alimentazione: "elettrico" },
    { marca: "Dacia", modello: "Duster", alimentazione: "gpl" },
    { marca: "Audi", modello: "A3", alimentazione: "diesel" },
    { marca: "Toyota", modello: "Yaris", alimentazione: "ibrido" },
    { marca: "Opel", modello: "Corsa", alimentazione: "benzina" },
    { marca: "Seat", modello: "Leon", alimentazione: "metano" },
    { marca: "Renault", modello: "Clio", alimentazione: "gpl" },
    { marca: "BMW", modello: "i3", alimentazione: "elettrico" }
];

// //creo i 3 array vuoti dove pushare

// const autoBenzina = [];
// const autoDiesel = [];
// const altreAuto = [];

// //ciclo per verificare

// for (let i = 0; i < automobili.length; i++) {

//     //creo var
//     const auto = automobili[i];

//     if(auto.alimentazione === "benzina" ) {
//         autoBenzina.push(auto);
//     } else if(auto.alimentazione === "diesel") {
//         autoDiesel.push(auto)
//     }else {
//         altreAuto.push(auto)
//     }

// }
// console.log(automobili);

// console.log("benzina =" ,autoBenzina);
// console.log("diesel =" , autoDiesel);
// console.log("queste sono le non benzina ne diesel =" ,altreAuto);

//-------------------------------------------------------------

//SOLUZIONE CON FILTER

const autoBenzina = automobili.filter(auto => auto.alimentazione === "benzina");

console.log(autoBenzina);


//A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.


const nomi = ["mARIO", "luCA", "aNNa", "giULia", "frANco"];

//const per salvare i nuovi nomi
const nomiFormattati = nomi.map(nome => {
    //trasformo prima tutto in caratteri minuscoli
    const minuscolo = nome.toLowerCase();
    
    //mi faccio ritornare la prima lettera ([0]) in maiuscolo più tutto il resto della parola in minuscolo
    return minuscolo[0].toUpperCase() + minuscolo.slice(1);
});

//stampa in console

console.log("array con nomi non formattati",nomi);

console.log("array con nomi formattati",nomiFormattati);
