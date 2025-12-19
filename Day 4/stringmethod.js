// var fullName = "Hari Ram";
// console.log(fullName.toLocaleLowerCase());
// console.log(fullName.toLocaleUpperCase());
//    task 1

// var stock1 = "vannila";
// var stock2 = "chocolate";
// var stock3 = "butterscoth";
// var stock4 = "cotton candy";
// var icecream = prompt("Please enter your fav icecream");
// console.log(icecream);
// if (icecream == stock1) {
//   console.log("yes, we have vannila in stock");
// } else if (icecream == stock2) {
//   console.log("yes, we have chocolate in stock");
// } else if (icecream == stock3) {
//   console.log("yes, we have butterscotch in stock");
// } else if (icecream == stock4) {
//   console.log("yes, we have cotton candy in stock");
// } else {
//   console.log("We ran out of stock");
// }

var stock1 = "vannila";              task 2
var stock2 = "chocolate";
var stock3 = "butterscoth";
var stock4 = "cotton candy";
var icecream = prompt("Please enter your fav icecream");
console.log(icecream.trim().toLowerCase());
var modifiedIcecream = icecream.trim().toLowerCase();
console.log(modifiedIcecream);
if (modifiedIcecream == stock1) {
  console.log("yes, we have vannila in stock");
} else if (modifiedIcecream == stock2) {
  console.log("yes, we have chocolate in stock");
} else if (modifiedIcecream == stock3) {
  console.log("yes, we have butterscotch in stock");
} else if (modifiedIcecream == stock4) {
  console.log("yes, we have cotton candy in stock");
} else {
  console.log("We ran out of stock");
// }

// var stock1 = "vannila";
// var stock2 = "chocolate";
// var stock3 = "butterscoth";
// var stock4 = "cottoncandy";
// var icecream = prompt("please enter your fav icecream");
// if (
//   icecream == stock1 ||
//   icecream == stock2 ||
//   icecream == stock3 ||
//   icecream == stock4
// ) {
//   console.log(`yes,we have ${icecream} in stock`);
// } else {
//   console.log(`we ran out of ${icecream}`);
// }





var stock1="vannila";
var stock2="chocolate";
var stock3="butterscotch";
var stock4="cottoncandy";
var icecream=prompt("please enter your favourite icecream");
var modifiedIceCream=icecream.trim().toLowerCase();
if(modifiedIceCream==stock1||
  modifiedIceCream==stock2||
  modifiedIceCream==stock3||
modifiedIceCream==stock4
){
console.log(`yes, your ${modifiedIceCream} is getting ready`);
}
else{
  console.log(`Sorry, your ${modifiedIceCream} is out of stock`);
}
