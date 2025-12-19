const student = {
  names: "abishek",
  age: 20,
  address: {
    city: "trichy",
    state: "tn",
  },
  hobbies: ["cricket", "football", "carrom"],
};
// const {
//   names,
//   address: { city },
//   hobbies: [, h2],
// } = student;
// console.log(city);
// console.log(names);
// console.log(h2);

const student1 = {
  address: { city: "Trichy" },
};
const {
  address: { city = "n/a" },
} = student;
console.log(city);
