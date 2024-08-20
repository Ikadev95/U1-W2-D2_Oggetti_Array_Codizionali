/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 9;
let num2 = 2;
if (num1 > num2) {
    console.log(num1 + " è maggiore di " + num2);
} else {
    console.log(num2 + " è maggiore di " + num1);
}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero = 6;
if (numero !== 5) {
    console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numDivCinque = 30;
if (numDivCinque % 5 == 0) {
    console.log(numDivCinque + " è divisibile per 5");
} else {
    console.log(numDivCinque + " non è divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let intero1 = 4;
let intero2 = 4;
if (intero1 === 8 || intero2 === 8 || intero1 + intero2 === 8 || intero1 - intero2 === 8 || intero2 - intero1 === 8) {
    console.log("ok");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* let prodotto1 = 20;
let prodotto2 = 40;
let totalShoppingCart = prodotto1 + prodotto2;
let spedizione;
if (totalShoppingCart > 50) {
    spedizione = 0;
} else {
    spedizione = 10;
}
console.log("il costo della tua spedizione è: " + spedizione + " euro");
 */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let prodotto1 = 22;
let prodotto2 = 40;
let sconto1 = prodotto1 * 0.2;
prodotto1 -= sconto1;
let sconto2 = prodotto2 * 0.2;
prodotto2 -= sconto2;
console.log(prodotto1);
console.log(prodotto2);
//si potrebbe fare più comodamente con una funzione
let totalShoppingCart = prodotto1 + prodotto2;
let spedizione;
if (totalShoppingCart > 50) {
    spedizione = 0;
} else {
    spedizione = 10;
}
console.log("il costo della tua spedizione è: " + spedizione + " euro");

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let v1 = 270;
let v2 = 3;
let v3 = 10;
let x = 0;

if (v1 < v2) {
    x = v1;
    v1 = v2;
    v2 = x;
}
if (v1 < v3) {
    x = v1;
    v1 = v3;
    v3 = x;
}
if (v2 < v3) {
    x = v2;
    v2 = v3;
    v3 = x;
}

console.log(v1 + " " + v2 + " " + v3);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let valore = 6;
console.log(typeof valore);
if (typeof valore === "number" && !isNaN(parseInt(valore))) {
    console.log(valore + " è di tipo number");
} else console.log(valore + " non è di tipo number");

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numeroPariControllo = 7;
if (numeroPariControllo % 2 == 0) {
    console.log(numeroPariControllo + " è un numero pari");
} else console.log(numeroPariControllo + " è un numero dispari");

/* ESERCIZIO 10 
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza. */

let val = 9;
if (val < 10) {
    console.log("Meno di 10");
} else if (val < 5) {
    console.log("Meno di 5");
} else if (val >= 10) {
    console.log("Uguale a 10 o maggiore");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
    name: "John",
    lastName: "Doe",
    skills: ["javascript", "html", "css"]
};

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const array = [];
array.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(array);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
array.splice(9, 1, 100);
console.log(array);
