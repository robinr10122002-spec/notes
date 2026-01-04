const sentence = 'mastering javascript is fun';

// Write a function to convert sentence to title case
const toTitleCase = (str) => {
  // Your code here
  return str
  .split(" ")
  .map(word=>word[0].toUpperCase()+word.slice(1)).join(" ")
  
  
  

}

console.log(toTitleCase(sentence));

 
