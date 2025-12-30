// const arr=[1,7,3,10,5,100]
// const result=arr.reduce((currentValue,maxValue)=>currentValue>maxValue?currentValue:maxValue)
// console.log(result)

const scores = [
  {
    marks: 32,
    name: "Yvette Merritt",
  },
  {
    marks: 57,
    name: "Lillian Ellis",
  },
  {
    marks: 22,
    name: "Mccall Carter",
  },
  {
    marks: 21,
    name: "Pate Collier",
  },
  {
    marks: 91,
    name: "Debra Beard",
  },
  {
    marks: 75,
    name: "Nettie Hancock",
  },
  {
    marks: 20,
    name: "Hatfield Hodge",
  },
];
const maxValue = scores.reduce((stud1, stud2) =>
  stud1.marks > stud2.marks ? stud1 : stud2
);
console.log(maxValue.name);
