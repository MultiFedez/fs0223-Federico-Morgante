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

    constructor(carica: number, numeroChiamate: number, costoMinuto: number) {
        this.carica = carica
        this.numeroChiamate = numeroChiamate
        this.costoMinuto = costoMinuto
    }

    ricarica(euro: number): void {
        this.carica += euro
        console.log("La ricarica è stata effettuata");
    }

    numero404(): string {
        return "Il tuo credito è" + this.carica
    }

    getNumeroChiamate(): number {
        return this.numeroChiamate
    }
    chiamata(min: number): void {
        let costoChiamata = this.costoMinuto * min
        if (costoChiamata < this.carica) {
            this.carica -= costoChiamata
            this.numeroChiamate++
            console.log("chiamata effettuata");
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

