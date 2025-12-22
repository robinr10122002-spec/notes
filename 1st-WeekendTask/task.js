// function greetUser(name){        task 1
// return `Hello, ${name}!`
// }

// console.log(greetUser("Alice"));
// console.log(greetUser("Bob"));

// const user1 = { name: "Jane", active: true };
// const user2 = { name: "John", active: false };
// const user3 = { name: "Alice", active: null };

// // Write a function that returns a message indicating if the user is active
// const getUserStatus = (user) => {
//   // Your code here - use template literals and conditional logic
//   const {user1,user2,user3}= user;
//   const {name,active}=user;
//   if (user.active == false||user.active==null) {
//     return `${user.name} is currently inactive`;
//   } return `${user.name} is currently active`;
// };

// console.log(getUserStatus(user1));
// console.log(getUserStatus(user2));
// console.log(getUserStatus(user3));

// task 1 in chapter 2

// const person = { name: "Alice", age: 30, city: "New York" }

// // Use object destructuring to extract name and age
// function extractPersonInfo (person)  {
//   // Your code here - use destructuring

//   // Your code here - use destructuring
//   const {name,age}=person
//   //const {Alice}=name;
//  // const {30} = age;
//   const nameAge=`${name} is ${age} years old`;
//   return nameAge;
// };
// console.log(extractPersonInfo(person));

// task 1.3 in github

// const wizard = {
//   name: "Merlin",
//   title: "Archmage",
//   wand: { core: "Phoenix Feather" },
// };
// function introduceWizard(wizardObj) {
//   const { name, title, wand } = wizard;
//   const { core } = wand;
//   return `${title} ${name} weilds a wand with ${core} core.`;
// }
// console.log(introduceWizard(wizard));
// // 🪄 Archmage Merlin wields a wand with Phoenix Feather core.

// task 1.4 combine and add:

// const shelf = ["🍎", "🥪"];
// const delivery = ["🍫", "🍇"];
// function mergeInventory(existing, incoming){
//     const extras=['🧃']
//     return`${shelf},${delivery},${extras}`;
// }
// console.log(mergeInventory(shelf, delivery));

// task 1.5:
// function packBag(owner = "Anon", ...items){
// //const packbag1= `${owner}${items}};`
//     if(items == ''){
//     return `${owner}'s bag is empty`;
//     } else{
// return `${owner}'s bag contains: ${items}`;
//     }}
// console.log(packBag("Natasha", "💄", "🔫"));
// console.log(packBag());

// function whereAreYou(personObj) {
//   const { user, location } = personObj;                       task 1.6 not completed fully
//   const { city, planet } = location;
//   if (personObj != {}) {
//     return `someone is currently in Unknown,Earth 🌍 `;
//   } else {
//     return `Thor is currently in ${city}, ${Yggdrasil} 🌍`;
//   }
// }

// console.log(
//   whereAreYou({
//     user: "Thor",
//     location: { city: "Asgard", planet: "Yggdrasil" },
//   })
// );
// console.log(whereAreYou({}));

// // Thor is currently in Asgard, Yggdrasil 🌍
// // Someone is currently in Unknown, Earth 🌍

// chapter2- 4th task            not completely fully
// const userProfile = {
//   id: 1,
//   name: "Eve",
//   settings: {
//     theme: "dark",
//   },
// };

// const userWithoutSettings = { id: 2, name: "Adam" };

// // Write a function that extracts the user's name and theme with default values
// const getUserSettings = (settings) => {
//   return settings.theme ??"light"
// };

// console.log(getUserSettings(userProfile));
// console.log(getUserSettings(userWithoutSettings));
// task 1.4
// const user1 = { name: "Alice", age: 25 };
// const user2 = { name: "Bob" };
// const user3 = null;

// // Create a function that safely gets a user's age
// const getUserAge = (user) => {
//   // Your code here - use optional chaining
//   return user?.age;
// };

// console.log(getUserAge(user1));
// console.log(getUserAge(user2));
// console.log(getUserAge(user3));

// // task 1.5
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
//   return data.user?.profile?.age??"Age not provided";
// };

// console.log(getUserAge(userData));
// console.log(getUserAge(userWithAge));
// console.log(getUserAge(userWithoutProfile));


// task 1.8 in es6

// const greet = (name) => {
//   // Your code here - use Date methods to determine the current hour
//   // Morning: 0-11, Afternoon: 12-17, Evening: 18-23
//   const timeNow = new Date();
//   const time = timeNow.getHours();
//   if (time <= 11) {
//     return `Good morning, ${name}!`;
//   } else if (time <= 17) {
//     return `Good afternoon, ${name}!`;
//   } else if (time <= 23) {
//     return `Good evening, ${name}!`;
//   }
// };
// // Test with different times
// console.log(greet("Alice"));
