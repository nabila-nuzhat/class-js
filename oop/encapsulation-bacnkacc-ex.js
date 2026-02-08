class BankAccount {
  #balance; // Private field

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) { // Public method
    if (amount > 0) {
      this.#balance += amount;
      console.log(`deposited: ${amount}`);
      
    }
  }

  getBalance() { // Public method (getter)
    return this.#balance;
  }
}

const account = new BankAccount(1000);
account.deposit(50);
console.log(account.getBalance()); // Output: 150
// console.log(account.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class
