// const userData = {
//   user: {
//     profile: {
//       name: "Alice",
//       age: null,
//     },
//   },
// };

// const userWithAge = { user: { profile: { age: 25 } } };
// const userWithoutProfile = { user: {} };

// // Write a function that safely returns the user's age or a default message
// const getUserAge = (data) => {
//   // Your code here
//  return data.user?.profile?.age??"Age not provided";
// };

// console.log(getUserAge(userData));
// console.log(getUserAge(userWithAge));
// console.log(getUserAge(userWithoutProfile));

//get even numbers
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Use filter to keep only even numbers
// const getEvenNumbers = (numbers) => {
//   // Your code here
//   const evenNumbers = numbers.filter((numbers) => numbers % 2==0);
//   return evenNumbers;
// };
// console.log(JSON.stringify(getEvenNumbers(numbers)));

//sum of numbers using reduce method in portal

// const numbers = [1, 2, 3, 4, 5];

// // Use reduce to sum all numbers
// const sumNumbers = (numbers) => {
//   // Your code here
//   const total=numbers.reduce((acc,numbers)=>acc+numbers,0);
//   return total;
// };

// console.log(sumNumbers(numbers));

//const scores = [
//   { name: "Alice", score: 90 },
//   { name: "Bob", score: 85 },
//   { name: "Charlie", score: 92 },
//   { name: "Diana", score: 88 },
// ];

// // Write a function that finds and formats the top scorer
// const getTopScorer = (scores) => {
//   // Your code here - find the highest score and format the result
// const top = scores.reduce((best, current) =>
//     current.score > best.score ? current : best
//   );

//   return `${top.name} is the top scorer with ${top.score}`;
// };

// console.log(getTopScorer(scores));

// using reduce method 18th task in portal

// const scores = [
//   { name: "Alice", score: 90 },
//   { name: "Bob", score: 85 },
//   { name: "Charlie", score: 92 },
//   { name: "Diana", score: 88 },
// ];

// // Write a function that finds and formats the top scorer
// const getTopScorer = (scores) => {
//   // Your code here - find the highest score and format the result
// const top=scores.reduce((best,current)=>current.score>best.score?current:best);

//   return `${top.name} is the top scorer with ${top.score}`;
// };

// console.log(getTopScorer(scores));

// const userProfile = {
//   id: 1,
//   name: "Eve",
//   settings: {
//     theme: "dark",
//   },
// };

// const userWithoutSettings = { id: 2, name: "Adam" };

// // Write a function that extracts the user's name and theme with default values
// const getUserSettings = (user) => {
//   // Your code here - use destructuring with default values

// };

// console.log(getUserSettings(userProfile));
// console.log(getUserSettings(userWithoutSettings));

//playlist 8-task 3

// const movies = [
//   { id: 1, title: "Baahubali", genre: "Action" },
//   { id: 2, title: "Arjun Reddy", genre: "Drama" },
// ];

// const moreMovies = [
//   { id: 3, title: "Jersey", genre: "Sports" },
//   { id: 4, title: "Eega", genre: "Fantasy" },
// ];

// // Write a function that merges movie arrays with default handling
// const mergeMovies = (movies, moreMovies = []) => {
//   // Your code here
//   let arr = []
//   arr.push(moreMovies)
//   return [...movies, ...moreMovies];

// };

// // console.log(JSON.stringify(mergeMovies(movies, moreMovies)));
// console.log(JSON.stringify(mergeMovies(movies)));

//playlist 8-task 4

// const movie1 = { id: 1, title: "Baahubali", genre: "Action" };
// const movie2 = { id: 2, title: "Arjun Reddy", genre: "Drama" };
// const movie3 = { id: 3, title: "Jersey", genre: "Sports" };

// // Write a function that collects titles from any number of movies
// const getTitles = (...movies) => {
//   // Your code here
//   const moviesName = movies.map((movies) => movies.title)
//   return moviesName;
// };

// console.log(JSON.stringify(getTitles(movie1, movie2, movie3)));
// console.log(JSON.stringify(getTitles(movie1, movie2)));

// PLAYLIST -7 =TASK 6

// const userProfile = {
//   id: 1,
//   name: "Eve",
//   settings: {
//     theme: "dark",
//   },
// };

// const userWithoutSettings = { id: 2, name: "Adam" };

// // Write a function that extracts the user's name and theme with default values
// const getUserSettings = (userProfile) => {
//   // Your code here - use destructuring with default values
//   const { name, settings: { theme = "light" } = {} } = userProfile;

//   return `${name} prefers the ${theme} theme`;
// };

// console.log(getUserSettings(userProfile));
// console.log(getUserSettings(userWithoutSettings));

// task 20 in playlist 9
// const userWithFullProfile = {
//   id: 1,
//   name: "Alice",
//   profile: {
//     age: 25,
//     address: {
//       city: "Wonderland",
//       zip: "12345",
//     },
//   },
// };

// const userWithPartialProfile = {
//   id: 2,
//   name: "Bob",
//   profile: {
//     age: null,
//   },
// };

// // Write a function that safely extracts user age from complex objects
// const getUserAge = (user) => {
//   // Your code here
// return String(user?.profile?.age??"Age is not provided")
// };

// console.log(getUserAge(userWithFullProfile));
// console.log(getUserAge(userWithPartialProfile));
// console.log(getUserAge({ id: 3, name: "Charlie" }));


