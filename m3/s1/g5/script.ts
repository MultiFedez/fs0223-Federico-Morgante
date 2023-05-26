// CREAZIONE INTERFACCIA
interface LoSmartphone {
    carica: number
    numeroChiamate: number
    costoMinuto: number
    registroChiamate: Call[]

    getRegistroChiamate(): void
    filtraChiamatePerDataOra(d: number, h: number): void
    ricarica(euro: number): void
    numero404(): string
    getNumeroChiamate(): number
    chiamata(min: number): void
    azzeraChiamate(): void
}
//  CLASSE EXTRA
class Call {
    id: number;
    durata: number;
    dataOra: Date;

    constructor(id: number, durata: number, dataOra: Date) {
        this.id = id;
        this.durata = durata;
        this.dataOra = dataOra;
    }
}
// CREAZIONE CLASSE E IMPLEMENTAZIONE
class Smartphone implements LoSmartphone {
    carica: number
    numeroChiamate: number
    costoMinuto: number = 0.20
    registroChiamate: Call[] = []

    constructor(carica: number, numeroChiamate: number,) {
        this.carica = carica
        this.numeroChiamate = numeroChiamate
    }

    // EXTRA ESERCIZIO
    getRegistroChiamate(): void {
        console.log(this.registroChiamate);
    }

    filtraChiamatePerDataOra(d: number, h: number): void {
        let filtro: Call[] = []
        this.registroChiamate.forEach((c: Call) => {
            if (d == c.dataOra.getDate() && h == c.dataOra.getHours()) {
                filtro.push(c)
            }
        })
        if (filtro.length == 0) {
            console.log("non ci sono risultati");

        } else {
            console.log(filtro);
        }
    }

    // METODI 
    ricarica(euro: number): void {
        this.carica += euro
        console.log("La ricarica è stata effettuata");
    }

    numero404(): string {
        return "Il tuo credito residuo è di € " + this.carica
    }

    getNumeroChiamate(): number {
        return this.numeroChiamate
    }

    chiamata(min: number): void {
        let costoChiamata = this.costoMinuto * min
        if (costoChiamata < this.carica) {
            this.carica -= costoChiamata
            this.numeroChiamate++
            let now: Date = new Date();
            this.registroChiamate.push(new Call(this.numeroChiamate, min, now))
            console.log(`chiamata di ${min} minuti effettuata `)
        } else if (costoChiamata == this.carica) {
            this.carica -= costoChiamata
            this.numeroChiamate++
            console.log("chiamata effettuata, ma credito esaurito");
        } else {
            console.log("Traffico insufficiente per effettuare la chiamata");
        }
    }

    azzeraChiamate(): void {
        this.numeroChiamate = 0
    }
}
// PRIMA ISTANZA
const Samsung = new Smartphone(10, 0)
Samsung.ricarica(10)
Samsung.chiamata(20)
Samsung.chiamata(10)
console.log("filtra");
Samsung.filtraChiamatePerDataOra(26, 15)
console.log(Samsung.numero404());
console.log(Samsung.getNumeroChiamate());
Samsung.getRegistroChiamate();
Samsung.azzeraChiamate()
console.log(Samsung.getNumeroChiamate());


// SECONDA ISTANZA   
const Oppo = new Smartphone(0, 0)
Oppo.ricarica(20)
Oppo.ricarica(30)
Oppo.chiamata(30)
Oppo.chiamata(20)
Oppo.chiamata(15)
console.log(Oppo.getNumeroChiamate());
console.log(Oppo.numero404());

// TERZA ISTANZA 
const Xiaomi = new Smartphone(0, 0)
Xiaomi.ricarica(10)
Xiaomi.chiamata(10)
Xiaomi.chiamata(18)
Xiaomi.chiamata(35)
Xiaomi.chiamata(25)
console.log(Xiaomi.getNumeroChiamate());

// QUARTA ISTANZA 
const Htc = new Smartphone(0, 0)
Htc.chiamata(1)
Htc.ricarica(10)
Htc.chiamata(8)
Htc.chiamata(14)
console.log(Htc.numero404());
console.log(Htc.getNumeroChiamate());
Htc.azzeraChiamate()
console.log(Htc.getNumeroChiamate());







/*Traccia Extra Dell'esercizio:

Aggiungi una proprietà registroChiamate che contenga un array di oggetti contenenti i seguenti dati:
id
durata
Data ed ora della chiamata

Aggiorna la classe in modo che il registro funzioni, e crea i seguenti metodi:
mostraRegistroChiamate() => mostra tutte le chiamate effettuate
filtraChiamatePerDataOra() => mostra solo le chiamate effettuate in una determinata data ed ora
 */