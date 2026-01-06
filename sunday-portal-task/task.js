//capitalize the first letter task in portal

//const sentence = 'mastering javascript is fun';

// // Write a function to convert sentence to title case
// const toTitleCase = (str) => {
//   // Your code here
//   return str
//   .split(" ")
//   .map(word=>word[0].toUpperCase()+word.slice(1)).join(" ")

// }

// console.log(toTitleCase(sentence));

// playlist-11--> 2nd task

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

// // Write a function that checks if all movies of a genre have high ratings
// const allRatingsAboveForGenre = (movies, rating, genre) => {
// const movieGenre=movies.filter(movie=>movie.genre==genre)
// if(movieGenre.length==0){return`no movies present in the specific genre`}
// const highestRating=movieGenre.every(movie=>movie.ratings.every(r=>r>rating))
// return highestRating?`yes${genre}movie has ${rating}ratings`:`no${genre}has no ${rating} rating`

// };

// console.log(allRatingsAboveForGenre(movies, 7, "Action"));
// console.log(allRatingsAboveForGenre(movies, 8, "Biography"));

const movies = [
  {
    id: 1,
    title: "Baahubali",
    director: "S. S. Rajamouli",
    year: 2015,
    ratings: [8, 9, 10],
    genre: "Action",
  },
  {
    id: 2,
    title: "Arjun Reddy",
    director: "Sandeep Reddy Vanga",
    year: 2017,
    ratings: [9, 8, 9],
    genre: "Drama",
  },
  {
    id: 3,
    title: "Mahanati",
    director: "Nag Ashwin",
    year: 2018,
    ratings: [10, 9, 8],
    genre: "Biography",
  },
  {
    id: 4,
    title: "Eega",
    director: "S. S. Rajamouli",
    year: 2012,
    ratings: [7, 8, 9],
    genre: "Fantasy",
  },
  {
    id: 5,
    title: "Jersey",
    director: "Gowtam Tinnanuri",
    year: 2019,
    ratings: [9, 9, 8],
    genre: "Sports",
  },
];

// Write a function that calculates average rating after a specific year
const getAverageRatingAfterYear = (movies, year) => {
  // Your code here
  const gettingYear = movies.filter((movies) => movies.year > year);
  if (gettingYear == 0) {
    return `no movies present in this specified year`;
  }
  const totalRating = gettingYear
    .map((gettingYear) =>
      gettingYear.ratings.reduce((acc, rating) => acc + rating)
    )
    .reduce((acc, rating) => acc + rating);
  const length = gettingYear.reduce(
    (acc, movie) => acc + movie.ratings.length,
    0
  );
  return (totalRating / length).toFixed(2);
};

console.log(getAverageRatingAfterYear(movies, 2015));
console.log(getAverageRatingAfterYear(movies, 2020));
