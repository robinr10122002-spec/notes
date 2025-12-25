// // Please provide the list of book titles
// books = [
//   { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
//   { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
//   { title: "Sapiens", rating: 4.9, genre: "History" },
//   { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
//   { title: "Clean Code", rating: 4.7, genre: "Technology" },
// ];
// ["Infinite Jest",  "The Catcher in the Rye", "Sapiens",  "A Brief History of Time",  "Clean Code"]

// const avengers = [
//   "Hulk",
//   "Iron man",
//   "Black widow",
//   "Captain america",
//   "Spider man",
//     "Thor",]

//     for(let avenger of avengers){
// console.log(avenger);
//     }

// function getFictionTitle(books) {
//   let fictionTitle = [];
//   for (let book of books) {
//     if (book.genre == "Fiction") {                  completed 1.2
//       fictionTitle.push(book.title);
//     }
//   }
//   return fictionTitle;
// }
// console.log(getFictionTitle(books));

// Task 1.3 (Challenging)
// Please provide Highest rated books (>= 4.7)
// Expected Output
// Highest rated books are: Sapiens, A Brief History of Time and Clean Code
// Case 1:
// There no books which are >= 4.7
// The are no good books available 😔

// Case 2:
// There is only one
// Highest rated books is Sapiens

// Case 3:
// There are two more
// Highest rated books are: Sapiens, A Brief History of Time and Clean Code



// answer

books = [
  { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
  { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
  { title: "Sapiens", rating: 4.9, genre: "History" },
  { title: "A Brief History of Time", rating: 4.8, genre: "Science" },  
    //   task 1.3 successfully completed
  { title: "Clean Code", rating: 4.7, genre: "Technology" },
];
// function getRating(books,rating) {
//   let titles = [];
//   for (let book of books) {
//     if (book.rating > 4.8) {
//       titles.push(books.title);
//       console.log("Highest rated books is Sapiens");
//     } else if (book.rating >= 4.7) {
//       console.log(
//         "Highest rated books are: Sapiens, A Brief History of Time and Clean Code"
//       );
//     } else {
//       console.log("There are no good available");
//     }
//   }
//   return titles;
// }


function getRating(books,rating) {
  let userRating = [];
  for (let book of books) {
    if (book.rating>=4.7) {                 
      userRating.push(book.rating);
    }
  }
  return userRating;
  if(userRating){

  }
}
console.log(getRating(books,rating));