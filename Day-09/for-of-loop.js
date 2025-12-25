// for of loop

// task 1.2 using of or loop       used for only getting values
// const avengers = [
//   "Hulk",
//   "Iron man",
//   "Black widow",
//   "Captain america",
//   "Spider man",
//   "Thor",
// ];
// for (let avenger of avengers) {
//   console.log(avenger);
// }
// output

// Hulk
// Iron man
// Black widow
// Captain america
// Spider man
// Thor

const books = [
  { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
  { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
  { title: "Sapiens", rating: 4.9, genre: "History" },
  { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
  { title: "Clean Code", rating: 4.7, genre: "Technology" },
];

// }

// ["Infinite Jest",  "The Catcher in the Rye", "Sapiens",  "A Brief History of Time",  "Clean Code"]

// function getTitles(books){
//     let titles=[];
//     for(let book of books ){
// titles.push(book.title)
//     }return titles;
// }
// console.log(getTitles(books));

// output

// [ "Infinite Jest", "The Catcher in the Rye", "Sapiens", "A Brief History of Time", "Clean Code"

// function returning another function

// function sayHello() {
//   return function () {
//     console.log("Hello! 😍");
//     const result=sayHello();

//   };return result;
// }
// console.log(sayHello()(),"Robin");
