//  CLASSE EXTRA
var Call = /** @class */ (function () {
    function Call(id, durata, dataOra) {
        this.id = id;
        this.durata = durata;
        this.dataOra = dataOra;
    }
    return Call;
}());
// CREAZIONE CLASSE E IMPLEMENTAZIONE
var Smartphone = /** @class */ (function () {
    function Smartphone(carica, numeroChiamate) {
        this.costoMinuto = 0.20;
        this.registroChiamate = [];
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    // EXTRA ESERCIZIO
    Smartphone.prototype.getRegistroChiamate = function () {
        console.log(this.registroChiamate);
    };
    Smartphone.prototype.filtraChiamatePerDataOra = function (d, h) {
        var filtro = [];
        this.registroChiamate.forEach(function (c) {
            if (d == c.dataOra.getDate() && h == c.dataOra.getHours()) {
                filtro.push(c);
            }
        });
        if (filtro.length == 0) {
            console.log("non ci sono risultati");
        }
        else {
            console.log(filtro);
        }
    };
    // METODI 
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
            var now = new Date();
            this.registroChiamate.push(new Call(this.numeroChiamate, min, now));
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
// PRIMA ISTANZA
var Samsung = new Smartphone(10, 0);
Samsung.ricarica(10);
Samsung.chiamata(20);
Samsung.chiamata(10);
console.log("filtra");
Samsung.filtraChiamatePerDataOra(26, 15);
console.log(Samsung.numero404());
console.log(Samsung.getNumeroChiamate());
Samsung.getRegistroChiamate();
Samsung.azzeraChiamate();
console.log(Samsung.getNumeroChiamate());
// SECONDA ISTANZA   
var Oppo = new Smartphone(0, 0);
Oppo.ricarica(20);
Oppo.ricarica(30);
Oppo.chiamata(30);
Oppo.chiamata(20);
Oppo.chiamata(15);
console.log(Oppo.getNumeroChiamate());
console.log(Oppo.numero404());
// TERZA ISTANZA 
var Xiaomi = new Smartphone(0, 0);
Xiaomi.ricarica(10);
Xiaomi.chiamata(10);
Xiaomi.chiamata(18);
Xiaomi.chiamata(35);
Xiaomi.chiamata(25);
console.log(Xiaomi.getNumeroChiamate());
// QUARTA ISTANZA 
var Htc = new Smartphone(0, 0);
Htc.chiamata(1);
Htc.ricarica(10);
Htc.chiamata(8);
Htc.chiamata(14);
console.log(Htc.numero404());
console.log(Htc.getNumeroChiamate());
Htc.azzeraChiamate();
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
