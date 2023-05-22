let giocatore1: number = 30;
let giocatore2: number = 57;

const randomNumber = function (a: number, b: number): void {
    let numeroCasuale: number = Math.floor(Math.random() * (100) + 1);
    console.log(numeroCasuale);
    if (a == numeroCasuale) {
        console.log("il primo giocatore ha indovinato il numero casuale");
    } else if (b == numeroCasuale) {
        console.log("il secondo giocatore ha indovinato il numero casuale");

    } else {
        if (Math.abs(a - numeroCasuale) < Math.abs(b - numeroCasuale)) {
            console.log("nessuno dei due ha indovinato,ma il primo giocatore si è avvicinato di più");
        } else if (Math.abs(a - numeroCasuale) > Math.abs(b - numeroCasuale)) {
            console.log("nessuno dei due ha indovinato, ma il secondo giocatore si è avvicinato di più");
        } else {
            console.log("nessuno dei due ha indovinato e sono alla stessa distanza");
        }
    }
}
randomNumber(giocatore1, giocatore2)




