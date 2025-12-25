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

// const details1 = {
//   authorAge: 55,
//   year: 2002,
//   price: 1200,
// };
// const book1 = {
//   names: "Harry Potter II: Chamber of Secrets",
//   author: "J.K Rowling",
//   authorAge: 45,
// };
// const bookDetails = {
//   ...book1,
//   ...details1,
// };
// console.log(bookDetails);

// const marks=[10,20,30,40]
// const [m1,m2,...extras]=marks                 ------rest method
// console.log(extras);

// const y1 = [200, 300];
// const y2 = [800, 900];
// const y3 = [1000, ...y1, 9000, ...y2];            ----------spread method

// console.log(y3);

// const y1=[100,200];
// const y2=[200,400];
// const y3=[...y2,...y1]
// console.log(y3);

// const marks=[100,200,300,400,500];
// const[m1,m2,...extras]=marks;
// console.log(extras);

// const book={
//     names:"bible",
//     author:"jesus"
// }
// const details={
//     year:1090,
//     pages:300
// }
// const bookDetails={
//     ...book,...details
// }

// console.log(bookDetails);

// const command1="hello"                  concat string method
// const command2="world"
// const command3=command1.concat(command2)
// console.log(command3);

// const quotes="Think positive and Do positive"       endswith string method
// console.log(quotes.endsWith("positive"));

// const sentence="ruth dog name is biggy"
// console.log(sentence.replace("ruth","my"));            replace() string method

// const sentence="if we can understand well means we can code well"
// console.log(sentence.slice(31));                             slice() string method

// const sentence="be calm and stay positive and trust in god";
// console.log(sentence.slice(29));

// const sentence="try its own way"
// console.log(sentence.split(sentence[3]));

// const marks=[2,3,4,5,]
// // console.log(marks.fill(6));
// // console.log(marks.fill(1,3,5));
// console.log(marks.fill(7,3));
// const number=0.98000000                                 tofixed method
// console.log(type(number.toFixed(2)));
