# ## Task 1.1
# Please provide the list of book titles


# ```python
books = [
    {"title": "Infinite Jest", "rating": 4.5, "genre": "Fiction"},
    {"title": "The Catcher in the Rye", "rating": 3.9, "genre": "Fiction"},
    {"title": "Sapiens", "rating": 4.9, "genre": "History"},
    {"title": "A Brief History of Time", "rating": 4.8, "genre": "Science"},
    {"title": "Clean Code", "rating": 4.7, "genre": "Technology"},
]
title=[]
for book in books:
    title.append(book["title"])
print(title)
# ```

# ### Expected Output

# ```py
# print(titles) # ["Infinite Jest",  "The Catcher in the Rye", "Sapiens",  "A Brief History of Time",  "Clean Code"]
# ```
# .............................................................................................

# ## Task 1.2
# Please provide the only Fiction books

fictional_title=[]
for book in books:
    if(book["genre"]=="Fiction"):
        fictional_title.append(book["title"])
print(fictional_title)
# ### Expected Output
# ```
# ["Infinite Jest",  "The Catcher in the Rye"]
# ```
# ....................................................................................................

# ## Task 1.3.1 (Home assignment)
# Please provide Highest rated books (>= 4.7)
highest_rating=[]
for book in books:
    if(book["rating"]>= 4.7):
        highest_rating.append(book["title"])
       
print(f"Highest rated books are: {", ".join(highest_rating[:-1])} and {highest_rating[-1]}")
     

# ### Expected Output

# ```
# Highest rated books are Sapiens, A Brief History of Time and Clean Code 
# ```


## Task 1.3.2 (Home assignment)

# Get the rating from user and match with books in the store


### Expected Output

#### Case 1:

# Please provide rating: 4.7
# The books available are Sapiens, A Brief History of Time and Clean Code 
# ```

#### Case 2:

# ```
# Please provide rating: 4.9
# The book available is Sapiens 
# ```

#### Case 3:


# Please provide rating: 5
# There no books available at this rating 😅
# ```