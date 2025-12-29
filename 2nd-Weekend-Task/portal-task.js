// playlist 9 task 5 using find and destructuring method

// const users = [
//   { id: 1, name: "Alice", friends: [{ name: "Bob" }, { name: "Charlie" }] },
//   { id: 2, name: "David", friends: [{ name: "Eve" }, { name: "Frank" }] },
//   { id: 4, name: "Deepak", friends: [] },
// ];

// // Write a function that returns the name of a user's first friend
// const getFirstFriendName = (users, userId) => {
//   // Your code here - use nested destructuring
// const getId=users.find(({id})=>id===userId)
// if(!getId){
//     return `User not found`
// }
// const{name,friends}=getId
// if(friends.length===0){
// return`${name} has no friends`
// }
// const [{name:firstFriend}]=friends
// return firstFriend
  
// };

// console.log(getFirstFriendName(users, 1));
// console.log(getFirstFriendName(users, 2));
// console.log(getFirstFriendName(users, 3));
// console.log(getFirstFriendName(users, 4));

// Bob
// Eve          //output                     must use destructuring and find method
// User not found
// Deepak has no friends 🥲
// .,.,.,.,.,,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,,.,.,


// playlist 9- task 10 using find and destructuring method
// const movies = [
//   {
//     id: 1,
//     title: "Baahubali",
//     director: "S. S. Rajamouli",
//     year: 2015,
//     ratings: [8, 9, 10],                           
//     genre: "Action",
//   },
//   {
//     id: 2,
//     title: "Arjun Reddy",
//     director: "Sandeep Reddy Vanga",
//     year: 2017,
//     ratings: [9, 8, 9],
//     genre: "Drama",
//   },
//   {
//     id: 3,
//     title: "Mahanati",
//     director: "Nag Ashwin",
//     year: 2018,
//     ratings: [10, 9, 8],
//     genre: "Biography",
//   },
//   {
//     id: 4,
//     title: "Eega",
//     director: "S. S. Rajamouli",
//     year: 2012,
//     ratings: [7, 8, 9],
//     genre: "Fantasy",
//   },
//   {
//     id: 5,
//     title: "Jersey",
//     director: "Gowtam Tinnanuri",
//     year: 2019,
//     ratings: [9, 9, 8],
//     genre: "Sports",
//   },
// ];

// // Write a function that finds a movie by ID and returns formatted details
// const getMovieDetails = (movies, id) => {
//   // Your code here
//  const gettingId=movies.find((movies)=>movies.id===id)
//  if(!gettingId){
//     return`Movie not found`
//  }
//  const{title,genre}=gettingId
//  const article = ["A", "E", "I", "O", "U"].includes(genre[0]) ? "an" : "a";
//  return`${title} is ${article} ${genre} movie`
// };

// console.log(getMovieDetails(movies, 1));
// console.log(getMovieDetails(movies, 5));
// console.log(getMovieDetails(movies, 6));

// // Baahubali is an Action movie
// // Jersey is a Sports movie
// // Movie not found
// ./././././././././././././/././././././././././././././././././././././././././././././././././././


// playlist 9-task 11 using filter and reduce method         not completed yet

// const movies = [
//   {
//     id: 1,
//     title: "Baahubali",
//     director: "S. S. Rajamouli",
//     year: 2015,
//     ratings: [8, 9, 10],
//     genre: "Action",
//   },
//   {
//     id: 2,
//     title: "Arjun Reddy",
//     director: "Sandeep Reddy Vanga",
//     year: 2017,
//     ratings: [9, 8, 9],
//     genre: "Drama",
//   },
//   {
//     id: 3,
//     title: "Mahanati",
//     director: "Nag Ashwin",
//     year: 2018,
//     ratings: [10, 9, 8],
//     genre: "Biography",
//   },
//   {
//     id: 4,
//     title: "Eega",
//     director: "S. S. Rajamouli",
//     year: 2012,
//     ratings: [7, 8, 9],
//     genre: "Fantasy",
//   },
//   {
//     id: 5,
//     title: "Jersey",
//     director: "Gowtam Tinnanuri",
//     year: 2019,
//     ratings: [9, 9, 8],
//     genre: "Sports",
//   },
// ];

// // Write a function that calculates average rating after a specific year
// const getAverageRatingAfterYear = (movies, year) => {
//   // Your code here
//   const gettingYear=movies.filter((movies)=>movies.year==year)
//   if(gettingYear.length==0){
// return`No movies after the specified year`
//   }
//   const [{ratings}]=gettingYear
//   const avgRatings=gettingYear.reduce((acc,ratings)=>acc+ratings,0)
//   return`${avgRatings}`
// };

// console.log(getAverageRatingAfterYear(movies, 2015));
// console.log(getAverageRatingAfterYear(movies, 2020));

// // Expected Output
// // 8.83
// // No movies after the specified year
//,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,...,..,,,.,,.,.,,.,.,.,.,,.,.,.,.,.,.,.,.,.,,.,.,.,,.,.,.,.,.,.,,.,

// playlist 9-task-13

const movies = [
  {
    id: 1,
    title: "Baahubali",
    ratings: [8, 9, 10],
  },
  {
    id: 2,
    title: "Arjun Reddy",
    ratings: [9, 8, 9],
  },
  {
    id: 3,
    title: "Mahanati",
    ratings: [10, 9, 8],
  },
];

// Write a function that compiles all ratings into a single array
const getAllRatings = (movies) => {
  // Your code here
return movies.reduce((acc,movies)=>{return[...acc,...movies.ratings]},[])

};

console.log(JSON.stringify(getAllRatings(movies)));