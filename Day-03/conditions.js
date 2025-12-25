// isGototour = 2;
// if (isGototour <= 2) {
//   console.log("bike 🏍 is ok");
// } else {
//   console.log("car🚙 is ok");
// }

// var isRaining = false;
// var isSunny = true;
// if (isRaining == true) {
//   console.log("wear raincoat");
// } else if (isSunny == true) {
//   console.log("wear sunglass 🕶");
// } else {
//   console.log("wear normal dress");
// }
// var gotoparty = 6;      program 1.1
// if (gotoparty <= 2) {
//   console.log("bike is okay");
// } else if (gotoparty <= 5) {
//   console.log("car is okay");
// } else if (gotoparty >= 5) {
//   console.log("bus is okay");
// }
//   var gotoparty = 5;          program 1.2
// if (gotoparty >= 2) {
//   console.log("go by bike");
// } else if (gotoparty == 3) {
//   console.log("go by auto");
// } else if (gotoparty == 4||gotoparty==5) {
//   console.log("go by van");
// } else {
//   console.log("go by bus");
// }
var goToParty = prompt("Tell me how many persons are there?");
if (goToParty <= 2) {
  console.log("go to bike");
} else if (goToParty == 3) {
  console.log("go to auto");
} else if (goToParty >= 4 && goToParty <= 7) {
  console.log("go to van");
} else {
  console.log("go to bus");
}
