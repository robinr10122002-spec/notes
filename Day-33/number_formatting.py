class Account:
    def __init__(self, account_number, name, balance):
        self.acc_no = account_number
        self.name = name
        self.balance = balance
       

    # Task
    def display_balance(self):
        return (f"Your Balance is ₹ {self.balance:,.2f}")
    def withdraw(self,amount):
        if amount<0:
            return "Invalid amount"
        elif amount>self.balance:
            return f"Insufficient funds. {self.display_balance()}"
        self.balance=self.balance-amount
        return f"Success. {self.display_balance()}"
    


nk = Account(101, "Nandha Kumar", 50_000)
rishi = Account(102, "Rishi", 3_00_000)
puspha = Account(103, "Pushpendar", 10_00_000)

# print(rishi.balance)
# print(rishi)

# print(rishi.display_balance())
# print(puspha.display_balance())
# print(nk.display_balance())
# Your balance is: ₹3,00,000.00

## Task 1.2

print(puspha.withdraw(2_00_000))  # Success. Your balance is: ₹900,000.00
print(puspha.display_balance())  # Your balance is: ₹900,000.00
print(puspha.withdraw(10_00_000))  # Insufficient funds. Your balance is: ₹900,000.00
print(puspha.withdraw(-100))  # Invalid amount