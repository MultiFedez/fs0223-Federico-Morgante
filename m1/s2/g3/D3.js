/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
{
let x = 10;
let y = 20;

if (x > y){
  console.log(`${x} è il numero maggiore`)
} else if (x === y){
  console.log(`${x} e ${y} sono uguali`)
} else {
  console.log(`${y} è il numero maggiore`)
}
}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
let z = 15;
if(z != 5){
  console.log('not equal');
} 
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
  let a = 20;
  if( a % 5 == 0){
    console.log('divisibile per 5')
  }
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{ 
  let x = 4;
  let y = 4;
    if(x == 8 || y == 8 || (x + y) == 8 || (x - y) == 8){
      console.log("almeno una condizione si è verificata");
    }  
   //possibile risoluzione alternativa? 
  //console.log(x == 8 || y == 8 || (x + y) == 8 || (x - y) == 8);
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
let totalShoppingCart = 51;
let speseSpedizione = 10;

if (totalShoppingCart >= 50) {
  console.log(totalShoppingCart)
} else {
  console.log(totalShoppingCart + speseSpedizione)
}
}
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
let totalShoppingCart = 51;
let speseSpedizione = 10;
let sconto = totalShoppingCart * 20 / 100

if ((totalShoppingCart - sconto) >= 50){
  console.log(totalShoppingCart - sconto)
} else {
  console.log((totalShoppingCart - sconto) + speseSpedizione)
}
}
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// {
// let num1 = 66;
// let num2 = 48;
// let num3 = 14;
// let arr = [];

// if (arr == []){
//   arr.push(num1, num2, num3)
//   console.log(arr)
// }

// arr.sort(function(a,b){
//   return a - b
// });

// console.log(arr)
// }

/*

let num = [1,100,20,22,101];

        num.sort(function(a,b){
            return a - b
        });

        console.log(num);




if(num1 > num2 && num1 > num3 && num2 > num3){
  arr.unshift(num1)
  console.log(arr)
}else if(num2 > nume3){
  arr.push(num2)
  console.log(arr)
}


  
}

let a = 2 
let b = 4
let c = 8

if (a > b && a > c)
{
        if (b>c)
        {
            console.log(La sequenza sarà ${a} ${b} ${c});
        }
        else
        {
            console.log(La sequenza sarà ${a} ${c} ${b});
        }
}
else if (b > a && b > c)
{
        if (a>c)
        {
             console.log(la sequenza sarà ${b} ${a} ${c});
        }
        else
        {
             console.log(la sequenza sarà ${b} ${c} ${a});
        }
}
else if (c > a && c > b)
{
        if (a>b)
        {
            console.log(la sequenza sarà ${c} ${a} ${b});
        }
        else
        {
            console.log(la sequenza sarà ${c} ${b} ${a});
        }
}*/

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number = 50;

console.log(typeof number)


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numb1 = 75

if(numb1 % 2 == 0){
  console.log(`${numb1} è pari`);
}else{
  console.log(`${numb1} è dispari`);
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

/* SCRIVI QUI LA TUA RISPOSTA */
{
let val = 7
if (val >= 5 && val < 10) {
    console.log("Meno di 10");
  } else if (val < 5) {
    console.log("Meno di 5");
  } else {
    console.log("Uguale a 10 o maggiore");
  }
}
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
  const me = {
    name: 'John',
    lastName: 'Doe',
    skills: ['javascript', 'html', 'css'],
  }
  me.city = 'Toronto';
  console.log(me);
  }

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
  const me = {
    name: 'John',
    lastName: 'Doe',
    skills: ['javascript', 'html', 'css'],
  }
  me.city = 'Toronto';
  

  delete me.lastName;
  console.log(me)
}
  
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
  const me = {
    name: 'John',
    lastName: 'Doe',
    skills: ['javascript', 'html', 'css'],
  }
  me.city = 'Toronto';


  me.skills.pop()
  console.log(me);

  
}
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

