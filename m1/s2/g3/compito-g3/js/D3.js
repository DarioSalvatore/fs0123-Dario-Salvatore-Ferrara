/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

function riordina(a, b) {
  if (a > b ){
    return a;
  } else {
    return b;
  }
}


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let numero = 5
if (numero == 5) {
  console.log('corretto')
}else if (numero < 5){
  console.log('not equal')
}else if (numero > 5){
  console.log('not equal')
}



/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let numer = 10
function divisibilePer5( numer ){
  return numer % 5 === 0;
}
console.log(divisibilePer5(numer))

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let num1 = 10;
let num2 = 8;
if(num1 ==8 || num2 == 8 || num1 + num2 == 8 || num1 - num2 == 8){
  console.log('true')
}else{
  console.log('false')
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = (50)
let Spedizione = 0


if(totalShoppingCart <= 50){
  let Spedizione = 10
}
let totale = totalShoppingCart + Spedizione;

console.log(totalShoppingCart)
console.log(Spedizione)
console.log(totale)

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let totaleCarrello = 50;
let Spedizione1 = 0;
let promo = 0.2;

if(totalShoppingCart <= 50){
  Spedizione1 = 10;
}
let totale1 = (totaleCarrello - totaleCarrello * promo) + Spedizione;

console.log(totalShoppingCart)
console.log(totaleCarrello * promo)
console.log(Spedizione)
console.log(totale1)

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let xnum1 = 10;
let xnum2 = 30;
let xnum3 = 20;

if (xnum1 >= xnum2 && xnum1 >= xnum3) {
  if(xnum2 >= xnum3) {
    console.log(xnum1, xnum2, xnum3)
  }else {
  console.log(xnum1, xnum3, xnum2)
  }
} else if (xnum2 >= xnum1 && xnum2 >= xnum3) {
  if (xnum1 >= xnum2) {
    console.log(xnum2, xnum1, xnum3)
  }else {
    console.log(xnum2, xnum3, xnum1)
  }
} else if (xnum3 >= xnum1 && xnum3 >= xnum2) {
  if (xnum1 >= xnum2) {
    console.log(xnum3, xnum1, xnum2)
  }else {
    console.log(xnum3, xnum2, xnum1)
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let nome = 'Tina'
if(typeof nome == 'string'){
  console.log('true')
}else if(typeof nome == 'number'){
  console.log('è un numero')
}else{
  console.log('false')
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let number = 10;
if(number % 2 == 0){
  console.log('pari')
}else{
  console.log('dispari')
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

 let val = 7
 if (val < 10 && val > 5) {
    console.log("Meno di 10");
 }else if(val < 5){
    console,log("Meno di 5")
 }else{
    console.log("Uguale a 10 o maggiore")
 }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  
}

me.city = 'Toronto'
console.log(me);



/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

delete me.skills[2]


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let elementari = [1,2,3,4,5,6,7,8,9,10]
console.log(elementari)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

elementari[elementari.length - 1] = 100


