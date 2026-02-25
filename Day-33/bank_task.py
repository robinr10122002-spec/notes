class Account:
    Interest_rate=0.02
    def __init__(self,account_number,name,balance):
          self.account=account_number
          self.name=name
          self.balance=balance
          
    def apply_interest(self):
               
               self.balance=(self.balance * Account.Interest_rate)+self.balance

               return f"Success. Applied interest rate of {Account.Interest_rate:.2%}. {self.display_balance()}"

    def display_balance(self):
       return f"Your balance is: ₹{self.balance:,.2f}"

gopi = Account(101, "Gopika Hariharan", 1_00_00_000)
vikki = Account(102, "Vignesh M", 10_00_000)
bala = Account(103, "Bala Kumar", 50_00_000)


# Interest rate 2%
# 100 + 2 = 102
print(gopi.apply_interest())
print(vikki.apply_interest())
print(bala.apply_interest())

# Success. Applied interest rate of 2.00%. Your balance is: ₹10,200,000.00
# Success. Applied interest rate of 2.00%. Your balance is: ₹1,020,000.00
# Success. Applied interest rate of 2.00%. Your balance is: ₹5,100,000.00

print(gopi.display_balance())
print(vikki.display_balance())
print(bala.display_balance())


# Your balance is: ₹10,200,000.00
# Your balance is: ₹1,020,000.00
# Your balance is: ₹5,100,000.00