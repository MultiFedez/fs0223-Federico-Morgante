class BankAccount {
    protected balance: number;
    constructor(initialBalance: number = 0) {
        this.balance = initialBalance;
    }
    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        if (this.balance >= amount) {
            this.balance -= amount;
        } else {
            console.log("Saldo insufficiente");
        }
    }

    getBalance(): number {
        return this.balance;
    }
}

class sonAccount extends BankAccount { }
class motherAccount extends BankAccount {
    private interestRate: number;

    constructor(initialBalance: number = 0, interestRate: number = 0) {
        super(initialBalance);
        this.interestRate = interestRate;
    }

    calculateInterest(): void {
        const interest = this.balance * this.interestRate;
        this.deposit(interest);
    }
}

const SonAccount = new sonAccount(100);
const MotherAccount = new motherAccount(500, 0.10);

SonAccount.deposit(50);
SonAccount.withdraw(20);

MotherAccount.deposit(100);
MotherAccount.calculateInterest();

console.log("Saldo conto figlio:", SonAccount.getBalance());
console.log("Saldo conto madre:", MotherAccount.getBalance());


