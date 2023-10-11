class Account {
    #balance
    constructor(name, amount) {
        this.id
        this.name = name
        this.#balance = amount
    }
    get balance() {
        return this.#balance
    }
    set balance(arg) {
        this.#balance = arg
    }
    credit(amount) {
        this.#balance += amount
    }
    debit(amount) {
        this.#balance -= amount
    }
    transferTo(wallet, amount) {
        this.debit(amount)
        wallet.credit(amount)
    }

}



const saving = new Account("saving", 1000);
const current = new Account("current", 8000);
saving.credit(5000);
saving.debit(1000);
saving.debit(2000);
saving.transferTo(current, 1000);
console.log(saving.balance);
console.log(current.balance);
