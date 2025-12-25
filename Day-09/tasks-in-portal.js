// Your code here - use Date methods to determine the current hour
// Morning: 0-11, Afternoon: 12-17, Evening: 18-23
//   const timeNow = new Date();
//   const time = timeNow.getHours();
//   if (time <= 11) {
//     return `Good morning, ${name}!`;
//   } else if (time <= 17) {
//     return `Good afternoon, ${name}!`;
//   } else if (time <= 23) {
//     return `Good morning, ${name}!`;
//   }

// Test with different times
//   const timeNow = newDate();
//   const time = timeNow.getHours();
//   if (time <= 11) {
//     return `Good morning, ${time}`;
//   } else if (time <= 17) {
//     return `Good afternoon, ${time}`;
//   } else if (time <= 23) {
//     return `Good evening, ${time}`;
//   }
// };
// console.log(greet("Alice"));

//   const movies = [
//     { id: 1, title: "Baahubali", genre: "Action" },             not completed yet
//     { id: 2, title: "Arjun Reddy", genre: "Drama" },
//   ];
// const greet = (name) => {
//   const moreMovies = [
//     { id: 3, title: "Jersey", genre: "Sports" },
//     { id: 4, title: "Eega", genre: "Fantasy" },
//   ];

//   // Write a function that merges movie arrays with default handling
//   const mergeMovies = (movies, moreMovies=[]) => {
//     // Your code here
//     const allMovies = [...movies, ...moreMovies];
//     return `${allMovies}`;
//   };
// };
// console.log(JSON.stringify(mergeMovies(movies, moreMovies)));
// console.log(JSON.stringify(mergeMovies(movies)));

// const userProfile = {
//   id: 1,
//   name: "Eve",
//   settings: {
//     theme: "dark",
//   },                                                                not completed yet
// };

// const userWithoutSettings = { id: 2, name: "Adam" };

// // Write a function that extracts the user's name and theme with default values
// function getUserSettings(theme = "light") {
//   // Your code here - use destructuring with default values
//   const { id, name, settings } = userProfile;
//   const theme = settings;
//   return `${userProfile.name} prefers the ${settings.theme} theme`;
// }

// console.log(getUserSettings(userProfile));
// console.log(getUserSettings(userWithoutSettings));

const sample = "Hello World";

// Write a function to reverse a string using spread, reverse & join
const reverseString = (str) => {
  // Your code here
  const reverseString1 = [...str];
  return reverseString1.reverse().join("");
};

console.log(reverseString(sample));
