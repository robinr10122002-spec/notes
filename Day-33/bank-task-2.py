# Task 1.6
# Account.update_interest_rate(4)
# Clue: classmethod


class Account:
    # class variable
    interest_rate = 0.02

    def __init__(self, account_number, name, balance):
        self.acc_no = account_number
        self.name = name
        self.balance = balance

    # Task
    def display_balance(self):
        return f"Your balance is: ₹{self.balance:,.2f}"

    def withdraw(self, amount):
        # Shield 🛡️
        if amount < 0:
            return "Invalid amount"

        if amount > self.balance:
            return f"Insufficient funds. {self.display_balance()}"
        # Shield 🛡️

        self.balance = self.balance - amount
        return f"Success. {self.display_balance()}"

    def apply_interest(self):
        self.balance = self.balance * Account.interest_rate + self.balance
        return f"Success. Applied interest rate of {Account.interest_rate:.2%}. {self.display_balance()}"
    @classmethod
    def update_interest_rate(cls,interest):
        cls.interest_rate=interest/100
        return f"Success. Interest rate updated =>{Account.interest_rate}"


gopi = Account(101, "Gopika Hariharan", 1_00_00_000)
vikki = Account(102, "Vignesh M", 10_00_000)
bala = Account(103, "Bala Kumar", 50_00_000)

print(Account.update_interest_rate(4))

print(gopi.apply_interest())
print(vikki.apply_interest())
print(bala.apply_interest())

print(gopi.display_balance())
print(vikki.display_balance())
print(bala.display_balance())

# # Success. Interest rate updated => 4.00%
# # Success. Applied interest rate of 4.00%. Your balance is: ₹10,400,000.00
# # Success. Applied interest rate of 4.00%. Your balance is: ₹1,040,000.00
# # Success. Applied interest rate of 4.00%. Your balance is: ₹5,200,000.00
# # Your balance is: ₹10,400,000.00
# # Your balance is: ₹1,040,000.00
# # Your balance is: ₹5,200,000.00