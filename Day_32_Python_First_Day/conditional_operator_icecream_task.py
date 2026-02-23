
# if(icecream=="vanilla"|icecream=="green tea"|icecream=="lemon"|icecream=="chocolate"):
#     print(f'Yes,we have {icecream} in stock')
# elif(icecream!=stock1|icecream!=stock2|icecream!=stock3|icecream!=stock4):
#                print(f"sorry,we ran out of {icecream}")
# ...................................................................................
# if(icecream=="vanilla"):
#     print(f"Yes, we have {icecream} in stock")
# if(icecream=="green tea"):
#     print(f"Yes, we have {icecream} in stock")
# if(icecream=="lemon"):
#     print(f"Yes, we have {icecream} in stock")
# if(icecream=="chocolate"):
#     print(f"Yes, we have {icecream} in stock")

# elif():
#     print(f"Sorry, we ran out of {icecream}")




# Task 1.2
# Clue - String methods
# Handle the extra space & letter case
# Case1:
# Please enter your fav 🍧?:      vaNillA
# Yes, we have vanilla in stock

# Case 2:
# Please enter your fav 🍧?:   pisTa
# Sorry, we ran out of pista

stock1 = "vanilla"
stock2 = "green tea"
stock3 = "lemon"
stock4 = "chocolate"


fav_icecream=input("Please enter your favourite icecream: ").strip().lower()
print(fav_icecream)

icecream=[stock1,stock2,stock3,stock4]
if fav_icecream in icecream:
    print(f"Yes, we have {fav_icecream} in stock")
else:
    print(f"Sorry,we ran out of {fav_icecream}")