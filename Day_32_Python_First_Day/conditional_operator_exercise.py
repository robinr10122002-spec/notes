# Task 1.1
# Compare Two People’s Heights (Taller / Same Height)
# Hint - input
# Better - abs()

captain = input("Please tell me the captain name: ").capitalize()
print(captain)

captain_height = input("Please tell me the captain height: ")
mod_captain_height = float(captain_height)
print(mod_captain_height)

vice_captain = input("Please tell me the vice_captain name: ").capitalize()
print(vice_captain)

vice_captain_height = input("Please tell me the vice_captain height: ")
mod_vice_captain_height = float(vice_captain_height)
print(mod_vice_captain_height)

difference = abs(mod_captain_height - mod_vice_captain_height)

if mod_captain_height > mod_vice_captain_height:
    print(f"{captain} is taller than {vice_captain} than {difference}")

elif mod_captain_height < mod_vice_captain_height:
    print(f"{vice_captain} is taller than {captain} than {difference}")

elif mod_captain_height == mod_vice_captain_height:
    print(f"{vice_captain} and {captain} has same height")
# Expected Output -
# Case 1:
# Please tell me the captain name?: Luffy
# Please tell me the vice captain name?: Zoro
# Please tell me the height of Luffy?: 173
# Please tell me the height of Zoro?: 163
# Luffy is taller than Zoro by 10cm

# Case 2:
# Please tell me the captain name?: Luffy
# Please tell me the vice captain name?: Zoro
# Please tell me the height of Luffy?: 173
# Please tell me the height of Zoro?: 185
# Zoro is taller than Luffy by 12cm


# Case 3
# Please tell me the captain name?: Luffy
# Please tell me the vice captain name?: Zoro
# Please tell me the height of Luffy?: 173
# Please tell me the height of Zoro?: 173
# Luffy and Zoro are of same height
