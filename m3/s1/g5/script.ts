interface ISmartphone {
    carica: number
    numeroChiamate: number
    costoMinuto: number

    ricarica(euro: number): void
    numero404(): string
    getNumeroChiamate(): number
    chiamata(min: number): void
    azzeraChiamate(): void
}

class Smartphone implements ISmartphone {
    carica: number
    numeroChiamate: number
    costoMinuto: number = 0.20

    constructor(carica: number, numeroChiamate: number,) {
        this.carica = carica
        this.numeroChiamate = numeroChiamate
    }

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

const Samsung = new Smartphone(10, 0)
Samsung.ricarica(10)
Samsung.chiamata(20)
console.log(Samsung.numero404());
console.log(Samsung.getNumeroChiamate());
Samsung.azzeraChiamate()
console.log(Samsung.getNumeroChiamate());


const Oppo = new Smartphone(0, 0)
Oppo.ricarica(20)
Oppo.ricarica(30)
Oppo.chiamata(30)
Oppo.chiamata(20)
Oppo.chiamata(15)
console.log(Oppo.getNumeroChiamate());
console.log(Oppo.numero404());


const Xiaomi = new Smartphone(0, 0)
Xiaomi.ricarica(10)
Xiaomi.chiamata(10)
Xiaomi.chiamata(18)
Xiaomi.chiamata(35)
Xiaomi.chiamata(25)
console.log(Xiaomi.getNumeroChiamate());


const Htc = new Smartphone(0, 0)
Htc.chiamata(1)
Htc.ricarica(10)
Htc.chiamata(8)
Htc.chiamata(14)
console.log(Htc.numero404());
console.log(Htc.getNumeroChiamate());
Htc.azzeraChiamate()
console.log(Htc.getNumeroChiamate());







