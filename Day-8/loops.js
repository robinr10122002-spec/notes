// // while loop            task 1.1
// let hearts = 0;
// while (hearts <= 5) {
//   console.log("❤".repeat(hearts));
//   hearts++;
// }
// //  for loop             task 1.2
// for (hearts = 0; hearts <= 5; hearts++) {
//   console.log("❤".repeat(hearts));
// }


// for(let hearts=0;hearts<=5;hearts++){
// console.log("🤍".repeat(hearts))
// }


// let heart=0;
// while(heart<=5){
//   console.log("🤍".repeat(heart))
// heart++;
// }


// // Task 1.3 - for loop or while loop
// printPattern(emoji, noOfRows);

// printPattern("🐳", 3);

// // Output
// // // 🐳
// // // 🐳🐳
// // // 🐳🐳🐳

function printPattern(emoji, noOfRows){
for(let shark=0;shark<=3;shark++){               
console.log(emoji.repeat(shark));
}
}

printPattern("🐳", 3);

// Task 1.4

// printPattern();

// Output
// ❤️
// ❤️❤️
// ❤️❤️❤️
// ❤️❤️❤️❤️
// ❤️❤️❤️❤️❤️

// do while loop
let i=0;
do{
console.log(i)
i++;
}
while(i<=5)