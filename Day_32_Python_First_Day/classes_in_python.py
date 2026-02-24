class Car:
    def __init__(self,wheels,doors,model,engine):
     self.wheels=wheels
     self.doors=doors
     self.model=model
     self.engine=engine

Lamborgini=Car(4,2,"Huracan","v16")

print(Lamborgini)
print(Lamborgini.model)
Hindustan=Car(4,4,"Ambassador","v4")
print(Hindustan)
print(Hindustan.wheels)


# ## Tata
# - Wheels - 4
# - Engine - v4
# - Model - Harrier
# - Doors - 4
Tata=Car(4,4,"Harrier","v4")
print(Tata)
print(Tata.model)

# .......................................................................................................



class Passbook:
   def __init__(self,account_number,ifsc_code,branch,holder_name):
    self.account_number=account_number
    self.ifsc_code=ifsc_code
    self.branch=branch
    self.holder_name=holder_name

IOB=Passbook(129304,"IOBA0032","Chennai","Robin")
print(IOB)
print(IOB.holder_name)