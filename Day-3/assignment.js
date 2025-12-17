// var number = prompt("Enter a valid number to find your week day");         assignment 1
// console.log(number);
// if (number == 1) {
//   console.log("Monday");
// } else if (number == 2) {
//   console.log("Tuesday");
// } else if (number == 3) {
//   console.log("Wednesday");
// } else if (number == 4) {
//   console.log("Thursday");
// } else if (number == 5) {
//   console.log("Friday");
// } else if (number == 6) {
//   console.log("Saturday");
// } else if (number == 7) {
//   console.log("Sunday");
// } else {
//   console.log("Wrong Option");
// }

// var firstBoyName = prompt("Enter the first boy name here");          assignment 3
// console.log(firstBoyName);
// var secondBoyName = prompt("Enter the second boy name here");
// console.log(secondBoyName);
// var firstBoyHeight = prompt("Enter the first boy height");
// console.log(firstBoyHeight);
// var secondBoyHeight = prompt("Enter the second boy height");
// console.log(secondBoyHeight);
// if(firstBoyHeight==secondBoyHeight){
// console.log(`${firstBoyName} and ${secondBoyName} are of same height`);
// }
// assignment 2
var firstPersonName = prompt("Enter the first person name");
console.log(firstPersonName);
var secondPersonName = prompt("Enter the second person name");
console.log(secondPersonName);
var firstPersonHeight = prompt(`Enter ${firstPersonName} height`);
console.log(firstPersonHeight);
var secondPersonHeight = prompt(`Enter ${secondPersonName} height`);
console.log(secondPersonHeight);
var difference = Math.abs(firstPersonHeight - secondPersonHeight);
if (firstPersonHeight > secondPersonHeight) {
  console.log(
    `${firstPersonName} is taller than the ${secondPersonName} by ${difference}cm`
  );
} else {
  console.log(
    `${firstPersonName} is smaller than the ${secondPersonName} by ${difference}cm`
  );
}
