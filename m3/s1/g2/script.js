var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BankAccount = /** @class */ (function () {
    function BankAccount(initialBalance) {
        if (initialBalance === void 0) { initialBalance = 0; }
        this.balance = initialBalance;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        }
        else {
            console.log("Saldo insufficiente");
        }
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return BankAccount;
}());
var sonAccount = /** @class */ (function (_super) {
    __extends(sonAccount, _super);
    function sonAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sonAccount;
}(BankAccount));
var motherAccount = /** @class */ (function (_super) {
    __extends(motherAccount, _super);
    function motherAccount(initialBalance, interestRate) {
        if (initialBalance === void 0) { initialBalance = 0; }
        if (interestRate === void 0) { interestRate = 0; }
        var _this = _super.call(this, initialBalance) || this;
        _this.interestRate = interestRate;
        return _this;
    }
    motherAccount.prototype.calculateInterest = function () {
        var interest = this.balance * this.interestRate;
        this.deposit(interest);
    };
    return motherAccount;
}(BankAccount));
var SonAccount = new sonAccount(100);
var MotherAccount = new motherAccount(500, 0.10);
SonAccount.deposit(50);
SonAccount.withdraw(20);
MotherAccount.deposit(100);
MotherAccount.calculateInterest();
console.log("Saldo conto figlio:", SonAccount.getBalance());
console.log("Saldo conto madre:", MotherAccount.getBalance());
