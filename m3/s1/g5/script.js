var Smartphone = /** @class */ (function () {
    function Smartphone(carica, numeroChiamate, costoMinuto) {
        this.costoMinuto = 0.20;
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.costoMinuto = costoMinuto;
    }
    Smartphone.prototype.ricarica = function (euro) {
        this.carica += euro;
        console.log("La ricarica è stata effettuata");
    };
    Smartphone.prototype.numero404 = function () {
        return "Il tuo credito è" + this.carica;
    };
    Smartphone.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    Smartphone.prototype.chiamata = function (min) {
        var costoChiamata = this.costoMinuto * min;
        if (costoChiamata < this.carica) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
            console.log("chiamata effettuata");
        }
        else if (costoChiamata == this.carica) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
            console.log("chiamata effettuata, ma credito esaurito");
        }
        else {
            console.log("Traffico insufficiente per effettuare la chiamata");
        }
    };
    Smartphone.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return Smartphone;
}());
