var Smartphone = /** @class */ (function () {
    function Smartphone(carica, numeroChiamate) {
        this.costoMinuto = 0.20;
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    Smartphone.prototype.ricarica = function (euro) {
        this.carica += euro;
        console.log("La ricarica è stata effettuata");
    };
    Smartphone.prototype.numero404 = function () {
        return "Il tuo credito residuo è di € " + this.carica;
    };
    Smartphone.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    Smartphone.prototype.chiamata = function (min) {
        var costoChiamata = this.costoMinuto * min;
        if (costoChiamata < this.carica) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
            console.log("chiamata di ".concat(min, " minuti effettuata "));
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
var Samsung = new Smartphone(10, 0);
Samsung.ricarica(10);
Samsung.chiamata(20);
console.log(Samsung.numero404());
console.log(Samsung.getNumeroChiamate());
Samsung.azzeraChiamate();
console.log(Samsung.getNumeroChiamate());
var Oppo = new Smartphone(0, 0);
Oppo.ricarica(20);
Oppo.ricarica(30);
Oppo.chiamata(30);
Oppo.chiamata(20);
Oppo.chiamata(15);
console.log(Oppo.getNumeroChiamate());
console.log(Oppo.numero404());
var Xiaomi = new Smartphone(0, 0);
Xiaomi.ricarica(10);
Xiaomi.chiamata(10);
Xiaomi.chiamata(18);
Xiaomi.chiamata(35);
Xiaomi.chiamata(25);
console.log(Xiaomi.getNumeroChiamate());
var Htc = new Smartphone(0, 0);
Htc.chiamata(1);
Htc.ricarica(10);
Htc.chiamata(8);
Htc.chiamata(14);
console.log(Htc.numero404());
console.log(Htc.getNumeroChiamate());
Htc.azzeraChiamate();
console.log(Htc.getNumeroChiamate());
