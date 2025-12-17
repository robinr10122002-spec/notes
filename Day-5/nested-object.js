// // const y1=[300,400,500]
// // const y2=[600,700,800]              spread method in array
// // const y3=[...y1,...y2]
// // console.log(y3);

// // const y1 = [300, 500];
// // const y2 = [600, 700];
// // const y3 = [100, ...y1, ...y2];         spread method adding another values
// // console.log(y3);

// const book={
//     names:"Harry Potter II : Chamber of Secrets",
//     author:"J.K Rowling"
// }
// const details={
//     year:2002,                             spread method in objects
//     price:1200
// }
// const bookDetails={
//     ...book,...details
// }
// console.log(bookDetails);

const details1 = {
  authorAge: 55,
  year: 2002,
  price: 1200,
};
const book1 = {
  names: "Harry Potter II: Chamber of Secrets",
  author: "J.K Rowling",
  authorAge: 45,
};
const bookDetails = {
  ...book1,
  ...details1,
};
console.log(bookDetails);
