# secret_message = "   Programming in Python is not only powerful but also fun!   "
# trimmed_message=secret_message.strip()
# print(trimmed_message)
# print(f"{trimmed_message[15:21]}-{trimmed_message[34:42]}".upper())

# Task 1.1
# Expected Output
# "PYTHON-POWERFUL"


# Task 1.2
# flipped_message = "!nuf sseldnE dna seitinutroppo lufrewop htiw nohtyP"
# original_message = flipped_message[::-1]
# print(original_message)
# print(f"{original_message[:6]} 🗡️   {original_message[12:20]} 🌸".lower())


# Expected Output
# "python 🗡️ powerful 🌸"

# ...................................................................................

# Task 1.3 (Home Assignment)

# After the 🔑
message = "    🚨🔍📱🔑secret_code✌️".strip().upper()
print(message)

print(message[4:])
index = message.find("🔑")
print(message[index + 1 :])
# Clue: find

# Output
# SECRET_CODE✌️
